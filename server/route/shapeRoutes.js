let express = require('express');
let router = express.Router();
let Shape = require('../model/shapes');

router.get('/', (req, res) => {
    res.json({message: 'Shape route works'});
});

router.post('/', (req, res) => {
    console.log('POST', req.body);
    let shapeData = Shape(req.body);
    shapeData.save(err => {
        if (err) {
            res.sendStatus(500);
            console.log('server err', err);
            return;
        }
        res.sendStatus(201);
    });
});

module.exports = router;