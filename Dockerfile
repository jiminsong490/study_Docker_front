FROM node:18.7.0
USER root

WORKDIR /front
COPY . /front

RUN npm install
COPY  . ./
