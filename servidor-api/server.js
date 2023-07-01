var http = require("http"),
  app = require("./config/express");

http.createServer(app).listen(2500, function () {
  console.log("Servidor escutando na porta: " + this.address().port);
});
