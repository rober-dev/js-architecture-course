FROM node:alpine

# Create app directory
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source
COPY . .

# Build site
RUN npm run build

# Port to expose
EXPOSE 3000

# Run command
CMD ["npm", "start"]