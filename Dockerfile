FROM alpine:latest AS builder

# vips-tools installs vips
# ruby-devs installs ruby
# build-base install gcc make
# npm install nodejs
RUN apk --no-cache add build-base vips-tools ruby-dev npm
RUN gem install jekyll bundler
ENV GEM_HOME="$HOME/gems"
ENV PATH="$HOME/gems/bin:$PATH"

FROM builder AS build

WORKDIR /app

# Install dependancies
COPY package.json package-lock.json ./
RUN npm install

COPY Gemfile Gemfile.lock ./
RUN bundle install

# Build
COPY . .

ENV JEKYLL_ENV production
RUN bundle exec jekyll build

FROM nginx AS runner

WORKDIR /app
COPY --from=build /app/_site /usr/share/nginx/html
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80