FROM node:alpine
LABEL maintainer="vishwajitdalve@gmail.com"
WORKDIR /usr/Jeet/publisher
COPY publisher.js /usr/Jeet/publisher/
COPY data.json /usr/Jeet/publisher/
RUN npm install mqtt
CMD ["node", "publisher.js"]