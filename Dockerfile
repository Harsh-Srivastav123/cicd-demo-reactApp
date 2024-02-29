# Use an official Node.js image as the base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the remaining app files to the working directory
COPY . /app

# # Build the React app
# RUN npm run build

# Expose the port the app runs on
EXPOSE 3000

# # Set environment variables
# ENV NODE_ENV=production

# Command to run the app
CMD ["npm", "start"]
