const Task = require('../models/Task');

// Create Task
exports.createTask = async (req, res, next) => {
    try {
        const { title, description, status, dueDate, assigneeId, projectId } = req.body;
        const task = await Task.create({ title, description, status, dueDate, assigneeId, projectId });
        res.status(201).json({ success: true, data: task });
    } catch (error) {
        next(error);
    }
};

// Get all tasks
exports.getTasks = async (req, res, next) => {
    try {
        const tasks = await Task.findAll();
        res.status(200).json({ success: true, data: tasks });
    } catch (error) {
        next(error);
    }
};

// Get task by id
exports.getTaskById = async (req, res, next) => {
    try {
        const task = await Task.findByPk(req.params.id);
        if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
        res.status(200).json({ success: true, data: task });
    } catch (error) {
        next(error);
    }
};

// Update Task
exports.updateTask = async (req, res, next) => {
    try {
        const [updated] = await Task.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ success: false, message: 'Task not found' });
        const updatedTask = await Task.findByPk(req.params.id);
        res.status(200).json({ success: true, data: updatedTask });
    } catch (error) {
        next(error);
    }
};

// Delete Task
exports.deleteTask = async (req, res, next) => {
    try {
        const deleted = await Task.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ success: false, message: 'Task not found' });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
