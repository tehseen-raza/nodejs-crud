const express = require('express')
const router = express.Router()
const Alien = require('../modals/aliens')

router.get('/', async (req, resp) => {
    try {
        const aliens = await Alien.find();
        resp.json(aliens);
    } catch (err) {
        resp.send('Error' + err)
    }
})


router.get('/:id', async (req, resp) => {
    try {
        const alien = await Alien.findById(req.params.id);
        resp.json(alien);
    } catch (err) {
        resp.send('Error' + err)
    }
})


router.post('/', async (req, resp) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        const a1 = await alien.save();
        resp.json(a1);
    }
    catch (err) {
        resp.send('Error' + err)
    }
})


router.patch('/:id', async (req, resp) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.name = req.body.name
        alien.tech = req.body.tech
        alien.sub = req.body.sub
        const a1 = await alien.save();
        resp.json(a1);
    } catch (err) {
        resp.send('Error' + err)
    }
})

router.delete('/:id', async (req, resp) => {
    try {
        const alien = await Alien.findById(req.params.id);
        const a1 = await alien.deleteOne();
        resp.json(a1);
    } catch (err) {
        resp.send('Error' + err)
    }
})


module.exports = router;