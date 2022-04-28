FROM node:alpine

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
RUN apk add vim
# install app dependencies
COPY package.json ./

COPY package-lock.json ./

RUN npm install
 
COPY . ./
  
CMD [ "npm", "start" ]