# Pickaria website using Jekyll

## Installation

### Easy version

1. Install [Docker](https://docs.docker.com/engine/install/)
2. Run `docker compose up -d --build`
3. Visit [localhost:8000](http://localhost:8000)

### Developer version

1. Install [NodeJS](https://nodejs.org/) and Jekyll using the [the official guide](https://jekyllrb.com/docs/installation/).  

#### Ubuntu

```shell
# Install required packages
sudo apt-get install ruby-full build-essential libvips-tools

echo '# Install Ruby Gems to ~/gems' >> ~/.bashrc
echo 'export GEM_HOME="$HOME/gems"' >> ~/.bashrc
echo 'export PATH="$HOME/gems/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc

gem install jekyll bundler

# Install dependencies
bundle install
npm install

# Serve for development
jekyll serve
# or
npm run dev

# Build for production
JEKYLL_ENV=production jekyll build
# or
npm run build

# Pre-compress files (optional)
npm run precompress
```

## Sample nginx configuration

```conf
server {
    listen      80;
    listen      [::]:80;
    server_name localhost;
    error_page  404 /404.html;
    gzip_static on;

    location / {
        root        /usr/share/nginx/html;
        index       index.html;
        try_files   $uri $uri/ $uri.html =404;
    }

    # Dynmap
    location ^~ /map {
        alias /MinecraftServers/plugins/dynmap/web;
    }
}
```