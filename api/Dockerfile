FROM node:alpine
WORKDIR /home/node/app

COPY ./package.json /home/node/app/
RUN npm install --production
CMD npm start

