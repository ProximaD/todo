const { body, validationResult } = require('express-validator');
const Task = require('../models/Task');
const Category = require('../models/Category');
const asyncHandler = require('../utils/asyncHandler');

exports.validateCreate = [
    body('title').trim().notEmpty().withMessage('Title required')
];

exports.create = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { title, description, dueDate, category, completed } = req.body;

//Ensures category belongs to user
if (category) {
    const cat = await Category.findOne({ _id: category, user: req.user.id });
    if (!cat) return res.status(400).json({ message: 'Invalid category' });
}

const task = await Task.create({
    title,
    description,
    dueDate,
    category,
    completed: Boolean(completed),
    user: req.user.id
});
res.status(201).json(task);
});

exports.list = asyncHandler(async (req, res) => {
    const { q, category, completed, sort } = req.query;
    const filter = { user: req.user.id };
    if (q) filter.title = { $regex: q, $options: 'i'};
    if (category) filter.category = category;
    if (completed === 'true' || completed === 'false') filter.completed = completed === 'true';

    const query = Task.find(filter).populate('category', 'name color');
    if (sort) query.sort(sort);
    else query.sort('-createdAt');
    const tasks = await query.exec();
    res.json(tasks);
});

exports.getOne = asyncHandler(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id }).populate('category', 'name color');
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
});

exports.update = asyncHandler(async (req, res) => {
    const { title, description, dueDate, category, completed } = req.body;

    if (category) {
        const cat = await Category.findOne({ _id: category, user: req.user.id });
        if (!cat) return res.status(400).json({ message: 'Invalid category' });
    }

    const task = await Task.findOneAndUpdate(
        { _id: req.params.id, user: req.user.id },
        { $set: { title, description, dueDate, category, completed } },
        { new: true }
    );
    if (!task) return res.status(404).json({ message: 'Task not found' });
    res.json(task);
});

exports.toggle = asyncHandler(async (req, res) => {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ message: 'Task not found' });
    task.completed = !task.completed;
    await task.save();
    res.json(task);
});

exports.remove = asyncHandler(async (req,res) => {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'Task not found' });
    res.json({ message: 'Deleted' });
});



