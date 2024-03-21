FROM node:18.17-alpine
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 8080
CMD [ "npm", "run", "start"]