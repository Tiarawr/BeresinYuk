const mongoose = require('mongoose');
const pesanSchema = new mongoose.Schema({
    to: String,
    from: String,
    message: String,
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Pesan', pesanSchema);