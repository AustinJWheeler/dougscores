FROM node:20-slim

# Set working directory
WORKDIR /app

# Copy application code
COPY . /app

# Exclude .git folder
RUN rm -rf /app/.git

# Install dependencies and build
RUN yarn build

# Set entrypoint
CMD ["yarn", "start"]
