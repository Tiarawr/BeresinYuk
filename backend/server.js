const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');

require('dotenv').config();
app.use (cors());
app.use (express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
});

const Pesan = require('./Models/Messages');
app.use('/api/messages', require('./Routes/Messages'));
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});