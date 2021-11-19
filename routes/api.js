// Main Module Required..
const express = require('express');

const router = express.Router();

router.get('/',(req, res)=> {
    res.send("From API Route");
});

module.exports = router;