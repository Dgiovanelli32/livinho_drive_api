const mongoose = require('mongoose');

//the Schema for my non-relational db (mlab)
const PostSchema = new mongoose.Schema({
    name: String,
    size: Number,
    key: String,
    url: String,
    CreatedAt: {
        type: Date,
        default: Date.now
    }
});

PostSchema.pre('save', function() {
    if(!this.url) {
        this.url = `${process.env.APP_URL}/files/${this.key}`;
    }
});

module.exports = mongoose.model("Post", PostSchema);
