const express = require('express')
const Painting = require('./models/Painting')
const cors = require('cors')
// const pry =  require('pryjs')

const bodyParser = require('body-parser')

const app = express()
app.use(cors())
app.use(bodyParser.json())


// Painting.hasOne(Artist)
// Artist.hasMany(Painting)

app.get("/paintings", (req,res) => {
    Painting.findAll()
    .then(paintings => res.json(paintings))

})

app.get("/paintings/:id",(req,res) => {
    // eval(pry.it)
    Painting.findByPk(req.params.id)
    .then(painting => res.json(painting))
})

app.post("/paintings",async (req,res) => {
    // eval(pry.it)
    // console.log(req.body)
    let painting = await Painting.create(req.body)
    res.json(painting)
})

app.patch("/paintings/:id", async(req, res) => {
    let painting = await Painting.findByPk(req.params.id)
    await painting.update(req.body)
    res.json(painting)
})

app.delete("/paintings/:id", async(req, res) => {
    let painting = await Painting.findByPk(req.params.id)
    painting.destroy()
  
})


const port = 8000
app.listen(port, () => {console.log("I am listening at"+port)})
