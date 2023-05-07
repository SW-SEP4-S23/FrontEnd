# Use a Node.js base image
FROM node:18

# Set the working directory to /app
WORKDIR /app

# COPY package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm ci

# Copy the rest of the application files to the container
COPY . .

# Build the application
RUN npm run build