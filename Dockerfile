# 1단계: 빌드
FROM node:18-alpine AS build
WORKDIR /usr/src/app

COPY package.json . 
RUN npm cache clean --force && npm install --verbose

COPY . . 
RUN npm run build  # Vite라면 dist 폴더 생성됨

# 2단계: nginx 배포
FROM nginx:alpine
COPY --from=build /usr/src/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf