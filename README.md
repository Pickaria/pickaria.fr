# Pickaria website using Jekyll

## Installation

Windows: please read [Jekyll on Windows](https://jekyllrb.com/docs/installation/windows/).  
Ubuntu: please read [Jekyll on Ubuntu](https://jekyllrb.com/docs/installation/ubuntu/).

```shell
sudo apt-get install ruby-full build-essential zlib1g-dev
bundle install
JEKYLL_ENV=production jekyll build
```

## Sample nginx configuration

```conf
listen 443 ssl http2;
listen [::]:443 ssl http2;
server_name www.pickaria.fr;
root /Pickaria/_site;

index index.html;

error_page 404 /404.html;

location / {
    try_files $uri $uri/ $uri.html =404;
}

# Dynmap
location ^~ /map {
    alias /MinecraftServers/plugins/dynmap/web;
}
```