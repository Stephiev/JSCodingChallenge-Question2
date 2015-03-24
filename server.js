var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res) {

  var path = url.parse(req.url).path

if (path === "/") {

    fs.readFile("index.html", function(err, content) {
        if(err){
            throw err;
            console.log("Error reading index file.");
            res.send("Sorry, there was an error.");
        } else {
            res.writeHead(200,{"Content-type":"text/HTML"});
            res.end(content,"UTF-8");
        }
    });
} else if (path === "/pickme") {

  res.end("Of course you should! Why? Because here's a link to the extremely impressive site I made in Foundations II: JavaScript (Two-name last names can also be piglatinified) as well as my final scores in the course.");

} else if (path === "/img/scores.png") {
   var img = fs.readFileSync('./img/scores.png');
    res.writeHead(200, {'Content-Type': 'image/png' });
    res.end(img, 'binary');
} else {
   res.writeHeader(404, { "Content-Type": "text/plain" });
   res.write("404 File Not Found\n");
   res.end();
}
}).listen(3000);

console.log("Server started on port " + port);


