FROM node:18-alpine

WORKDIR /app

ARG FRONTEND_SECRET

ENV FRONTEND_SECRET=${FRONTEND_SECRET}

COPY package*.json ./
RUN npm install --production

COPY . .

EXPOSE 3000
CMD ["npm", "start"] 