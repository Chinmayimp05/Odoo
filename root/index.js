const express = require('express');
const app = express();
require('dotenv').config();

const cors = require('cors');
const morgan = require('morgan');

const { connectDB, sequelize } = require('./config/db');

const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const userRoutes = require('./routes/userRoutes');

// Connect to DB
connectDB()
    .then(async () => {
        console.log('Database connected');

        // Sync all models to the DB
        await sequelize.sync();
        console.log('Database models synchronized');
    })
    .catch((err) => {
        console.error('Failed to connect or sync DB:', err);
        process.exit(1);
    });

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('SynergySphere Backend is running');
});

// Global error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
        success: false,
        message: err.message || 'Server Error',
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = app;
