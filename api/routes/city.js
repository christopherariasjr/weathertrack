const express = require('express');
const router = express.Router();
const City = require('../models/City')

router.get('/:id', async(req, res) => {

    if(req.query._id === undefined) {
        res.send(400)
        return
    }

    let roomID = req.query._id.trim().toLowerCase();

    try {
        var result = await City.findById(roomID).exec();
    } catch(err) {
        res.sendStatus(404);
        return
    }
    res.json(result);
});

module.exports = router