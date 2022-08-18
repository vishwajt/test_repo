FROM node:alpine
LABEL maintainer="vishwajitdalve@gmail.com"
WORKDIR /usr/Jeet/subscriber
COPY subscriber.js /usr/Jeet/subscriber
RUN npm install mqtt
CMD ["node", "subscriber.js"]