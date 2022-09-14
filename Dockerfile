FROM ruby:2 AS builder
WORKDIR /app

# Dependancies
COPY Gemfile Gemfile.lock ./
RUN apt
RUN bundle install

# Compile
COPY . .
ENV JEKYLL_ENV production
RUN bundle exec jekyll build

FROM nginx AS runner
WORKDIR /app
COPY --from=builder /app/_site /usr/share/nginx/html

EXPOSE 80