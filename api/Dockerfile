FROM node:alpine
WORKDIR /home/node/app

COPY package.json .
RUN npm install --production
CMD ["npm", "start"]

