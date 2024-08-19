
# Mattermost Sentry API transformer

Since sentry does not support integration directly to mattermost for alerts and ..

And after doing some digging I found out there are some transformers in line php or go lang ..

I'm a python or nodejs person so.

I decided to create this repo, in nodejs. And with very customizable way.

**You can point sentry alerts as WEBHOOK to this projects address, and this project will extract relevant data and send as a notification to mattermost.**


## Run project as docker container

- `docker pull sinawic/mattermost-sentry-api-transformer`
- create `.env` file with key `NOTIFICATION_URL`
- `docker-compose up -d`


## Build project yourself

After you edit `index.js` file for like manipulating the data that will be notified

- `docker build -t sinawic/mattermost-sentry-api-transformer .`
- create `.env` file with key `NOTIFICATION_URL`
- `docker-compose up -d`


## Access project API

The project will be listening on port `3000`


## Environment Variables:

- NOTIFICATION_URL=https://example.com/hooks/xxx


## Developing the project

After you clone the repo:

- `npm i`
- create `.env` file with key `NOTIFICATION_URL`
- `node index.js`


### Customize notification data

In `/app/file.json` latest request received from sentry will be stored in json format.

You can customize the fields sent as a notification by editting the `index.js` file, then rebuilding the container with steps above.

========================

Any contribution will be openly appreciated!

> WITH ❤ BY SINAWIC
