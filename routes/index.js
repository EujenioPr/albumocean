var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.sendFile('index.html', {
        root: '/public/'
    }, function(err) {
        if (err) {
            console.log(err)
        } else {
            return;
        }
    })
})

module.exports = router;
