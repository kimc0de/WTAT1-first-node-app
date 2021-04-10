"use strict";

const fs = require("fs"),
httpStatus = require("http-status-codes"),
contentTypes = require("./contentTypes");

module.exports = {
  getFile: (file, res) => {
    fs.readFile(`./${file}`, (error,data) => {
      if (error){
      res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
        contentTypes.html);
        res.end("There was an error serving content of the file: " + file);
      }
      res.end(data,"UTF-8");
    });
  }
};
