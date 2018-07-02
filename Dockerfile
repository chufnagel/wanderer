FROM node:10-alpine

# create non-root user
RUN addgroup -S nodejs && adduser -S -G nodejs nodejs

# Set HOME environment variable
ENV HOME=/home/nodejs

# Copy package.json and package-lock.json to app directory
COPY package*.json $HOME/app/

COPY src/ $HOME/app/src

# Add dumb-init to alpine linux
ADD https://github.com/Yelp/dumb-init/releases/download/v1.2.1/dumb-init_1.2.1_amd64 /usr/local/bin/dumb-init

# Change working directory to app
WORKDIR $HOME/app

# give non-root user access to dumb-init
RUN chown -R nodejs:nodejs $HOME/* /usr/local && \
  chmod +x /usr/local/bin/dumb-init && \
  npm install --silent --progress=false --production && \
  chown -R nodejs:nodejs $HOME/*
COPY . .

# Switch to non-root user
USER nodejs

# Expose container port
EXPOSE 3000

CMD [ "dumb-init", "node", "index.js" ]
