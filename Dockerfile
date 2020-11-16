FROM node:12

RUN mkdir -p /usr/src/app
ENV PORT 4000 

WORKDIR /usr/src/app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install --production

COPY . /usr/src/app

RUN yarn build

EXPOSE 4000 
CMD ["yarn", "start"]
