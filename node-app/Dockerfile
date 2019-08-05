FROM node:latest

WORKDIR /app
COPY package.json .
RUN npm cache verify 
RUN npm install \
    COPY . .
EXPOSE 5000
CMD ["npm","server"]
