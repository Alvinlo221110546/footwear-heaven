FROM node:18
WORKDIR /workspace  # Ini akan jadi /workspace di container

# Copy semua file
COPY package*.json ./
COPY . .            # Ini akan copy semua folder (controller, routes, dll)

RUN npm install
CMD ["node", "routes/index.js"]  # Sesuaikan dengan entrypoint Anda