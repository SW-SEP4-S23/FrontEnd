FROM node:18-alpine as development

# Create app directory
WORKDIR /app

# Install libary + ./ --> der hvor den skal kopieres hen. 
COPY package*.json ./

# Install app dependencies 
RUN npm install --include=dev

COPY . ./

ENV WATCHPACK_POLLING=true

CMD ["npm", "run", "start"]