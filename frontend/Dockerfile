# Multi-stage build
# Build stage
FROM node:20-alpine AS build
WORKDIR /app
COPY frontend/package*.json ./
RUN npm ci
COPY frontend/ .
RUN npm run build

# Run stage (nginx)
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# on copie la conf nginx au build (pas de volume)
COPY nginx/default.conf /etc/nginx/conf.d/default.conf
