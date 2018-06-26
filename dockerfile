FROM node:alpine

RUN apk add --update bash
RUN apk add --update docker

#Set work directory to /usr/app
WORKDIR /usr/src/app

#Copy the package.json file to /usr/app
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm install --only=production

#Bundle app source
COPY . .

# Make port 80 available to the world outside this container
EXPOSE 8080

CMD [ "npm", "start" ]