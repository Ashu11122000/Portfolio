# ================================
# Stage 1 - Build the application
# ================================

FROM node:22-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# ================================
# Stage 2 - Serve with Nginx
# ================================

FROM nginx:1.29-alpine

# Remove default nginx files
RUN rm -rf /usr/share/nginx/html/*

# Copy build files
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]