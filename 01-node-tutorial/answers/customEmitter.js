const EventEmitter = require("events");

const emitter = new EventEmitter();

emitter.on("greet", (name) => {
  console.log(`Grand Rising, ${name}!`);
});

emitter.on("status", (status, user) => {
  console.log(`${user} is extremely  ${status} `);
});

emitter.emit("greet", "Mario");
emitter.emit("status", "chill", "Mario");
