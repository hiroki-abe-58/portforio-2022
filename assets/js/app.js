const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.render('hello.ejs');
});

// サーバーを起動するコード
app.listen(3000);
