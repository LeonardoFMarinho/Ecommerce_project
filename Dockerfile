FROM node

WORKDIR /usr/app

COPY package.json ./

RUN npm install 

COPY . . 

EXPOSE 4321

CMD ["npm", "run", "dev"]