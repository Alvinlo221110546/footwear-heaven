FROM node:18
WORKDIR /workspace 

# Copy semua file
COPY package*.json ./
COPY . .           

RUN npm install
CMD ["node", "routes/index.js"]  