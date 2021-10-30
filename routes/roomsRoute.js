const express = require('express');
const router = express.Router();

const Room = require('../models/room')

router.get('/getallrooms', async (req, res) => {
    const rooms = await Room.find({})
})