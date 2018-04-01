const express = require('express')
const app = express()

app.post('/', (req, res) => res.end('', 'binary'));

app.listen(8798, () => console.log('Example app listening on port 8798!'))
