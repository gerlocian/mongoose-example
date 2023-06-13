FROM node:18.16.0 AS buildimage

FROM buildimage AS production
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD npm start
