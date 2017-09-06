/**
 * Created by Eugene on 06.03.2017.
 */
var mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/albumoceandb')
var db = mongoose.connection

db.on('error', function(err) {
    console.log('connection error: ', err.message)
})

db.once('open', function callback() {
    console.log('Connected to DB!')
})

var Schema = mongoose.Schema

//Schemas

var Album = new Schema({
    name: { type: String, require: true },
    author: { type: String, require: true },
    imageUrl: { type: String, required: false }
})

Album.path('name').validate(function(v) {
    return v.length > 5 && v.length < 20
})

var AlbumModel = mongoose.model('Album', Album)

module.exports.AlbumModel = AlbumModel
