# Use the latest LTS version of Node.js
FROM node:18-alpine AS build
 
# Set the working directory inside the container
WORKDIR /app

COPY . .

ENV VITE_API_URL=api
ENV VITE_FLASK_URL=flask

RUN npm install && npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 5173