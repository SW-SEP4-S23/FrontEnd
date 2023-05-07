FROM node:18-alpine as development

# Create app directory
WORKDIR /app

# Install libary + ./ --> der hvor den skal kopieres hen. 
COPY package*.json ./

RUN npm cache clean --force

# Install app dependencies 
RUN npm install --include=dev & npm cache clean --force

# Kopierer resten. 
COPY . .

# Docker bruger til at kommunikere med container
EXPOSE 3000

# Den der starter app
