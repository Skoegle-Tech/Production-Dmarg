# Base image
FROM node:20-alpine

# Add build arguments for metadata
ARG BUILD_DATE="2025-04-16 05:45:30"
ARG BUILD_USER="ManojGowda89"

# Add metadata to the image
LABEL org.opencontainers.image.created="${BUILD_DATE}" \
      org.opencontainers.image.authors="${BUILD_USER}" \
      org.opencontainers.image.description="Application deployed by ${BUILD_USER} on ${BUILD_DATE}"

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install root dependencies (if any)
RUN npm install

# Copy entire project (client and server folders)
COPY . .

# Create a build info file
RUN echo "Build Date: ${BUILD_DATE}" > /app/build_info.txt && \
    echo "Built By: ${BUILD_USER}" >> /app/build_info.txt

# Install client dependencies and build the React app
WORKDIR /app/client
RUN npm ci && npm run build

# Move back to server directory, install server dependencies
WORKDIR /app/server
RUN npm ci

# Expose port
EXPOSE 13000

# Start the server
CMD ["node", "Server.js"]