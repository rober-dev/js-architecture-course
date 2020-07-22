FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Port to expose
EXPOSE 5001

# Run command
CMD ["npm", "start"]