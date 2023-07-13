const EventEmitter = require("events");
const events = new EventEmitter();
events.on("response", () => {
  console.log("This is emitted");
});
events.on("response", (name, id) => {
  console.log("Some Other Logics" + name + id);
});
events.emit("response", "owais", 123);
