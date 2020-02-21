//var sock =new WebSocket("ws://localhost:5001");
var sock = new WebSocket("ws://3.135.208.0:3000"); //replace this address with the one the node.js server prints out. keep port 3000
var display = document.getElementById("display");
sock.onopen = function(event) {
  alert("Socket connected succesfully!!!");
};

sock.onmessage = function(event) {
  console.log(event); //show received from server data in console of browser
  display.innerHTML += event.data; //add incoming message from server to the log screen previous string + new string(message)
  //traduccion(event.data);
};

function traduccion(cadenaMorse) {
  display.innerHTML += cadenaMorse;
}
