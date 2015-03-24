var http = require("http");
var fs = require("fs");
var url = require("url");
var port = process.env.PORT || 3000;

var server = http.createServer(function(req, res) {

  var path = url.parse(req.url).path
  // console.log(path)

   // var query = url.parse(req.url,true).query;
   //      pic = query.image;
   //      console.log(query)
   //      console.log(pic)
    // Responds to a root-url request with an index.html file

    //read the image using fs and send the image content back in the response
    // fs.readFile("/img/scores.png", function (err, content) {
    //     if (err) {
    //         res.writeHead(400, {'Content-type':'text/html'})
    //         console.log(err);
    //         res.end("No such image");
    //     } else {
    //         //specify the content type in the response will be an image
    //         res.writeHead(200,{'Content-type':'image/jpg'});
    //         res.end(content);
    //     }
    // });

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


