var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Kho Kheng Eian');
  res.send('Lim Jing Jie');
});

app.listen(process.env.PORT || 3000);
