FROM buildkite/puppeeter:latest

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y

WORKDIR /app
COPY . /app
RUN npm install
RUN npm i ytdl-core
CMD ["npm", "start"]
EXPOSE 8080
