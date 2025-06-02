const express = require('express');
const router = express.Router();

const Pesan = require('../Models/Messages');

router.get('/', async (req, res) => {
    try {
        const messages = await Pesan.find();
        res.status(200).json(messages);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching messages', error });
    }
});

router.post('/', async (req, res) => {
    const { to, from, message } = req.body;

    if (!to || !from || !message) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newMessage = new Pesan({ to, from, message });
        await newMessage.save();
        res.status(201).json(newMessage);
    } catch (error) {
        res.status(500).json({ message: 'Error saving message', error });
    }
});

module.exports = router;