const { body, validationResult } = require('express-validator');
const Category = require('../models/Category');
const asyncHandler = require('../utils/asyncHandler');

exports.validateCreate = [body('name').trim().notEmpty().withMessage('Name required')];

exports.create = asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    const { name, color } = req.body;
    const cat = await Category.create({ name, color, user: req.user.id });
    res.status(201).json(cat);
});

exports.list = asyncHandler(async (req, res) => {
    const cats = await Category.find({ user: req.user.id }).sort('name');
    res.json(cats);
});

exports.update = asyncHandler(async (req, res) => {
    const { name, color } = req.body;
    const cat = await Category.findOneAndUpdate(
    { _id: req.params.id, user: req.user.id },
    { $set: { name, color } },
    { new: true }
    ); 
    if (!cat) return res.status(404).json({ message: 'Category not found' });
    res.json(cat);
});

exports.remove = asyncHandler(async (req, res) => {
    const deleted = await Category.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ message: 'Category not found' });
    res.json({ message: 'Deleted' });
});