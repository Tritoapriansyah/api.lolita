FROM buildkite/puppeeter:latest
RUN docker login --username=Tritoxlolita --email=villagespecial.8.7.2.5@gmail.com Password:Trito=23042006

RUN apt-get update
RUN apt-get upgrade -y
RUN apt-get install nodejs -y

WORKDIR /app
COPY . /app
RUN npm install
RUN npm i ytdl-core
CMD ["npm", "start"]
EXPOSE 8080
