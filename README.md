# React Discord Clone
> Functional Discord Clone using React, Socket IO, NodeJS, Express and MySQL


Originally started off on a test project for learning Functional Components, Hooks and Socket IO, ended up being a Discord Clone. 

![layout image](public/application.png)

Live Version http://ericellb.github.io/React-Discord-Clone

API https://github.com/ericellb/React-Discord-API


## Features
  Implemented Features
  - [x] Real time messaging using Socket IO
  - [x] Local Authentication
  - [x] Loads User Data upon login (Servers, Channels, Private Messages)
  - [x] Creation and Joining Servers
  - [x] Creation of Channels in a Server
  - [x] Server Settings (Change name and delete)
  - [x] Channel Settings (Change name and delete)
  - [x] Persistent channel history
  - [x] Pretty Print Code Blocks enclodes in three `
  - [x] Private messaging
  - [x] Timestamps for messages
  - [x] Show current active users in given server

  Planned Features
  - [ ] Reformat how messages are fetched 
      - Fetch messages on channel change
      - Make API return only X results until we ask for more
      - Will help scale once Image uploads are implemented
  - [ ] Convert to Typescript
  - [ ] Voice Chat down the road...


## License
Copyright Eric Ellbogen 2019

- This project is under the **GNU V3** license. [Find it here](https://github.com/ericellb/React-Discord-Clone/blob/master/LICENSE).
