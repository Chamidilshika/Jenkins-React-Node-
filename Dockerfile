FROM node:18

WORKDIR /app

COPY ..

RUN cd server && npm install
RUN cd client && npm install && npm run build

EXPOSE 5000

CMD ["node", "server/index.js"]