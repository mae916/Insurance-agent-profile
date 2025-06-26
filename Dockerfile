# 빌드
FROM node:18-alpine as build
WORKDIR /usr/src/app

# 패키지 설치 및 코드 복사
COPY package.json . 
RUN npm install
COPY . .

# nginx를 이용해 정적 배포
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf