FROM node:18
WORKDIR /workspace

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 8080

CMD ["node", "server.js", "--port", "8080"]