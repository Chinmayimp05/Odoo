const { Sequelize } = require('sequelize');
const path = require('path');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: path.join(__dirname, '../database/synergysphere.sqlite'),
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log('SQLite connected successfully.');
    } catch (err) {
        console.error('DB Connection error:', err);
        process.exit(1);
    }
};

module.exports = { sequelize, connectDB };
