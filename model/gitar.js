const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gitarSchema = new Schema({
    namaPembeli:{
        type: String
        },
        jumlahbeli:{
            type: String
        },
        jumlahharga : {
            type: String
        }
})
module.exports =mongoose.model('gitar',gitarSchema)