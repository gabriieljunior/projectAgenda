"use strict";

var express = require('express');
var app = express();
app.listen(3000, function () {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000.');
});
