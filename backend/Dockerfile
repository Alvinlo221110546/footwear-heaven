# Gunakan base image Node.js versi LTS
FROM node:18-alpine

# Buat direktori kerja di container
WORKDIR /usr/src/app

# Copy package.json dan package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy semua file proyek (kecuali yang ada di .dockerignore)
COPY . .

# Expose port aplikasi (sesuaikan dengan port di server.js)
EXPOSE 3000

# Perintah untuk menjalankan aplikasi
CMD ["node", "server.js"]