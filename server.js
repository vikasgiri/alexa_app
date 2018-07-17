var AlexaAppServer = require("index.js");

AlexaAppServer.start({
  server_root: './',
  port: process.env.PORT || 3000,
  verify: true,
  debug: false
});
