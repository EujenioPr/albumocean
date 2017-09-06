var express = require('express')
var router = express.Router()
var path = require('path')
var bodyParser = require('body-parser')
var multer = require('multer')
var index = require('./routes/index')
var AlbumModel = require('./libs/mongoose').AlbumModel
var app = express()

var crypto = require('crypto')
var mime = require('mime')

var fs = require('fs')

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get('/api', function(req, res) {
    res.send("<p  style='font-family: Arial'>Click <a href='/api/albums'>right here</a>, to see the MAGIC!</p>")
})

// Albums Routes
app.get('/api/albums', function(req, res) {
    return AlbumModel.find(function(err, albums) {
        if (!err) {
            return res.send(albums)
        } else {
            res.statusCode = 500
            console.log('Internal error: => ', res.statusCode, err.message)
            return res.send({ error: 'Server Error '})
        }
    })
})

app.post('/api/albums', function(req, res) {
    var album = new AlbumModel({
        name: req.body.name,
        author: req.body.author,
        imageUrl: req.body.imageUrl
    })

    album.save(function(err) {
        if (!err) {
            console.log('Album Created!')
            return res.send({ status: 'OK', album: album })
        } else {
            console.log(err)
            if (err.name == 'ValidationError') {
                res.statusCode = 400
                res.send({status: 'Validation error'})
            } else {
                res.statusCode = 500
                res.send({status: 'Server error'})
            }
        }
    })
})

app.get('/api/albums/:id', function(req, res) {
    return AlbumModel.findById(req.params.id, function(err, album) {
        if (!album) {
            res.statusCode = 404
            return res.send({ error: 'Not found' })
        }
        if (!err) {
            // console.log({album: album})
            return res.send(album)
        } else {
            res.statusCode = 500
            return res.send({ error: 'Server error' })
        }
    })
})

app.put('/api/albums/:id', function(req, res) {
    return AlbumModel.findById(req.params.id, function(err, album) {
        if (!album) {
            res.statusCode = 404
            return res.send({ error: 'Not found' })
        }

        album.name = req.body.name
        album.author = req.body.author
        album.imageUrl = req.body.imageUrl

        return album.save(function(err) {
            if (!err) {
                console.log('Album Updated')
                return res.send({ status: 'OK', album: album })
            } else {
                console.log(err)
                if (err.name == 'ValidationError') {
                    res.statusCode = 400
                    res.send({status: 'Validation error'})
                } else {
                    res.statusCode = 500
                    res.send({status: 'Server error'})
                }
            }
        })

    })
})

app.delete('/api/albums/:id', function(req, res) {
    return AlbumModel.findById(req.params.id, function(err, album) {
        if (!album) {
            res.statusCode = 404
            return res.send({ error: 'Not found' })
        }
        return album.remove(function(err) {
            if (!err) {
                console.log('Album removed!')
                return res.send({ status: 'OK' })
            } else {
                res.statusCode = 500
                return res.send({ error: 'Server error' })
            }
        })
    })


})

//   JUST MUSIC TEST HERE BELOW
//

    app.get('/music', function(req, res) {
        var fileId = req.query.id
        var file = __dirname + '/music/' + fileId

        console.log(file)

        fs.stat(file, function(err, stats) {
            if (stats) {
                var rstream = fs.createReadStream(file)
                    rstream.pipe(res)
            } else {
                res.send("It's - 404")
                res.end()
            }
        })
    })

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './music/')
    },
    filename: function (req, file, callback) {
        callback(null, file.originalname + '_' + Date.now() + '.mp3');
    }
    // filename: function (req, file, cb) {
    //     crypto.pseudoRandomBytes(16, function (err, raw) {
    //         cb(null, raw.toString('hex') + Date.now() + '.' + 'mp3')
    //     });
    // }
});

var upload = multer({ storage: storage }).single('myFile')
    app.post('/upload', function(req, res) {
        upload(req, res, function(err) {
            if (err) {
                return res.end('Some error')
            }
            res.end('File was uploaded')
        })

    })


//
//   END OF TEST

// Creepy thing:
app.get('**', function(req, res) {
    res.sendFile(__dirname + '/public/index.html')
})

app.listen(3000, function() {
    console.log('Server is running 3000')
})
