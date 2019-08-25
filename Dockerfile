FROM node:8

# RUN mkdir usr/
WORKDIR /usr/src

ENV PATH /usr/src/node_modules/.bin:$PATH

# ADD package.json /usr/src/package.json
COPY package.json /usr/app 
RUN npm install
RUN npm install react-scripts@0.9.5 -g

CMD ["npm", "start"]