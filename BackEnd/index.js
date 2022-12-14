const conntetToMongos = require("./db")
const express = require('express')
conntetToMongos();




const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
//  Avaliable Routes
app.use("/api/autho",require('./routes/auth'))
app.use("/api/notes",require('./routes/notes'))



app.get('/', (req, res) => {
  res.send('Hello OnestopSollution!')
})





app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})