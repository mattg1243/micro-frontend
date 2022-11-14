FROM node:alpine

COPY src ./src
COPY public ./public
COPY server.js ./
COPY package*.json ./
COPY tsconfig.json ./
RUN npm install
RUN npm run build

EXPOSE 8081
CMD ["npm", "run", "prodstart"]