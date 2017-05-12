let express = require('express')
let app = express()

app.get('/',(req, res, next) => {
  res.send('Halo dunia@!!')
})

app.listen(3000, () => {
  console.log('listening on port 3000');
})
