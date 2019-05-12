// // Chat1
// var express = require('express');
// var app = express();
// var server = require('http').Server(app);
// var io = require('socket.io')(server);
// var messages = [];

// app.use(express.static("."));
// app.get('/', function (req, res) {
//    res.redirect('index.html');
// });
// server.listen(3000);


// io.on('connection', function (socket) {
//     for(var i in messages) {
//       io.sockets.emit("display message", messages[i]);
//     }
//     socket.on("send message", function (data) {
//         messages.push(data);
//         io.sockets.emit("display message", data);
//     });
//     socket.on("delete message", function () {
//         io.sockets.emit("delete from your message");
//     });
//  });
 

// tnayin

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var messages = [];

app.use(express.static("."));
app.get('/', function (req, res) {
   res.redirect('index.html');
});
server.listen(3000);

io.on('connection', function (socket) {
    for(var i in messages) {
      io.sockets.emit("display message", messages[i]);
    }
    socket.on("send message", function (data) {
        messages.push(data);
        io.sockets.emit("display message", data);
    });
 });
 

function setup(){
    size(500,400);
    background(grey);
    noFill();
    stroke(255);
    smooth();    
}
setup();

function draw(){
    ellipse(mouseX, mouseY, 20, 20);
} 
draw();