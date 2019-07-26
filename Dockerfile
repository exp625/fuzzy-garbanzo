FROM node:8

# Create app directory
RUN mkdir /usr/src/app
WORKDIR /usr/src/app

# install and cache app dependencies
COPY package.json /usr/src/app/package.json
RUN npm install --only=prod

# add app
COPY . /usr/src/app

# compile the angular app
WORKDIR /usr/src/app/public
RUN npm install --only=prod
RUN npm run build -- --prod
RUN rm -rf node_modules

WORKDIR /usr/src/app

EXPOSE 3000

CMD [ "npm", "start" ]
