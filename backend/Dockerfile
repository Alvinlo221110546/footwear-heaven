FROM node:18-alpine
WORKDIR /app
COPY package*.json .
RUN npm install
COPY . .
EXPOSE 8001  # Harus sama dengan PORT environment
CMD ["node", "server.js"]  # Pastikan ini menjalankan file utama