const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema(
    {
        title: { type: String, required: true, trim: true },
        description: { type: String, default: ''},
        completed: { type: Boolean, default: false },
        dueDate: {type: Data },
        category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }
    },
    { timestamps: true }
);

//Helpful indexes
taskSchema.index({ user: 1, completed: 1});

module.exports = mongoose.model('Task', taskSchema);