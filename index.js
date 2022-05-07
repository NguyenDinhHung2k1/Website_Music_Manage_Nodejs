const express = require('express')
const app = express()
const port = 3000

app.get('/tin-tuc', (req, res) => {

    var a = 1;
    var b = 2;
    var c = a + b;

  res.send('xin chào các bạn và chào mừng bạn đến và làm quen với nodejs!')
})

//ip: 127.0.0.1 -localhost

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})