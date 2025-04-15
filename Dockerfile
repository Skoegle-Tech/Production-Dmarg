# Base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install root dependencies (if any)
RUN npm install

# Copy entire project (client and server folders)
COPY . .

# Install client dependencies and build the React app
WORKDIR /app/client
RUN npm ci && npm run build

# Move back to server directory, install server dependencies
WORKDIR /app/server
RUN npm ci

# Expose port (adjust based on your server config)
EXPOSE 13000

# Start the server
CMD ["node", "Server.js"]
