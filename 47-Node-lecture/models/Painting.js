const Sequelize = require('sequelize')
const {STRING} = Sequelize

// console.log(STRING)

const seq = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
})


const Painting = seq.define('paintings',{
    title:{
        type: STRING
    },
    desc:{
        type: STRING
    },
    image:{
        type: STRING
    }
})

module.exports = Painting
seq.sync()

