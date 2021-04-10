const port = 3000,
  http = require("http"),
  httpStatus = require("http-status-codes"),
  router = require("./router"),
  contentTypes = require("./contentTypes"),
  utils = require("./utils");

router.get("/", (req, res) => {
  res.writeHead(httpStatus.OK, contentTypes.html);
  utils.getFile("views/index.html", res);
});

router.get("/bootstrap.css", (req, res) =>{
  res.writeHead(httpStatus.OK, contentTypes.js);
  utils.getFile("node_modules/bootstrap/dist/css/bootstrap.min.css", res);
});

const images = ["100-200.png", "200-300.png", "300-400.png", "400(1).png", "400(2).png", "400-500.png", "500.png"];
for (var i = 0; i < images.length; i++) {
  router.get("/" + images[i], (req, res) => {
    res.writeHead(httpStatus.OK, contentTypes.png);
    utils.getFile("public/images/" + req.url, res);
  });
}

http.createServer(router.handle).listen(port);
console.log(`The server is listening on port number: http://localhost:${port}`);
