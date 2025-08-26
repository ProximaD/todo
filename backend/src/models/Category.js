const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema(
    {
        name: { type: String, required: true, trim: true },
        color: {type: String, default: '#888888'},
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    { timestamps: true}
);

categorySchema.index({ name: 1, user: 1 }, {unique: true });

module.exports = mongoose.model('Category', categorySchema);