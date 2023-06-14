FROM node:18.15-slim

WORKDIR /home/node/app

USER node

# Reading files indefinitly to keep docker container UP
CMD [ "tail", "-f", "/dev/null" ]