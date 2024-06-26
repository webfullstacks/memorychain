FROM node:18 AS build
WORKDIR /app
# copy
COPY . /app
# build
RUN npm i
RUN npm run build

FROM nginx:1.25.5-alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
EXPOSE 8433
CMD ["nginx", "-g", "daemon off;"]
