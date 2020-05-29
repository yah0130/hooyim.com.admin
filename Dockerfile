FROM node:12.0-slim AS builder
# set working directory
WORKDIR /app

# install and cache app dependencies
COPY . .

# install dependencies and build the angular app
RUN npm config set registry https://registry.npm.taobao.org
RUN npm install
RUN npm run build

FROM nginx:stable-alpine
COPY default.conf /etc/nginx/conf.d/

# copy from dist to nginx root dir
COPY --from=builder /app/dist/angular-admin /usr/share/nginx/html

# expose port 80
EXPOSE 80

# run nginx in foreground
# https://stackoverflow.com/questions/18861300/how-to-run-nginx-within-a-docker-container-without-halting
CMD ["nginx", "-g", "daemon off;"]