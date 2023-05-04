FROM node:18

# Create app directory
WORKDIR /usr/src/app

# Install libary + ./ --> der hvor den skal kopieres hen. 
COPY package*.json ./

# Install app dependencies 
RUN npm install

# Kopierer resten. 
COPY . .

# Set environment variables. Så node ved at den skal være i development. 
ENV NODE_ENV=development

# Docker bruger til at kommunikere med container
EXPOSE 3000

# Den der starter app
CMD ["npm", "run", "start:dev"]