### STAGE 1: Build ###
FROM node:alpine AS build
WORKDIR /app
COPY package.json ./
RUN npm install
COPY . .
RUN npm install && \
    npm run build
### STAGE 2: Run ###
FROM nginx:alpine
COPY --from=build /app/output/dist/ /usr/share/nginx/html