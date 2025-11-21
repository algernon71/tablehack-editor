FROM node:lts-alpine AS build
WORKDIR /usr/src/app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

FROM nginxinc/nginx-unprivileged

COPY ./config/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /usr/src/app/dist/tablehack-editor/browser /usr/share/nginx/html

EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]