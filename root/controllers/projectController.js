const Project = require('../models/Project');

// Create a new project
exports.createProject = async (req, res, next) => {
    try {
        const { name, description, deadline, priority, managerId, tags } = req.body;
        const project = await Project.create({ name, description, deadline, priority, managerId, tags });
        res.status(201).json({ success: true, data: project });
    } catch (error) {
        next(error);
    }
};

// Get all projects (optionally filter by user, etc.)
exports.getProjects = async (req, res, next) => {
    try {
        const projects = await Project.findAll();
        res.status(200).json({ success: true, data: projects });
    } catch (error) {
        next(error);
    }
};

// Get a single project by ID
exports.getProjectById = async (req, res, next) => {
    try {
        const project = await Project.findByPk(req.params.id);
        if (!project) return res.status(404).json({ success: false, message: 'Project not found' });
        res.status(200).json({ success: true, data: project });
    } catch (error) {
        next(error);
    }
};

// Update a project by ID
exports.updateProject = async (req, res, next) => {
    try {
        const [updated] = await Project.update(req.body, { where: { id: req.params.id } });
        if (!updated) return res.status(404).json({ success: false, message: 'Project not found' });
        const updatedProject = await Project.findByPk(req.params.id);
        res.status(200).json({ success: true, data: updatedProject });
    } catch (error) {
        next(error);
    }
};

// Delete a project by ID
exports.deleteProject = async (req, res, next) => {
    try {
        const deleted = await Project.destroy({ where: { id: req.params.id } });
        if (!deleted) return res.status(404).json({ success: false, message: 'Project not found' });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
};
