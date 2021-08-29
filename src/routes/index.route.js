const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> {
    res.json({
        message: 'Welcome to my first API.',
        remind: 'You need have to have token on header to get data!!'
    })
})

module.exports = router