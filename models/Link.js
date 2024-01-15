const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Link = new Schema({
    url: {
        type: String,
        required: true,
    },
    shortCode: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Link", Link);
