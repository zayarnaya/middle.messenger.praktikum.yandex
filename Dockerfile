# https://snyk.io/blog/10-best-practices-to-containerize-nodejs-web-applications-with-docker/ 

FROM node:18.9.0-buster 
WORKDIR /www/chat-release/
COPY . /www/chat-release/
ENV NODE_ENV development
RUN npm i
RUN npm run build
EXPOSE 3000
CMD "node" "server.js"
