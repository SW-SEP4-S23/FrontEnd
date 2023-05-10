FROM node:18-alpine as development

# Create app directory
WORKDIR /app

# Install libary + ./ --> der hvor den skal kopieres hen. 
COPY package*.json ./

RUN npm install -g nodemon

# Install app dependencies 
RUN npm install --include=dev --quiet

COPY . .

ENTRYPOINT ["nodemon", "/app/server.js"]  

# Kopierer resten. 