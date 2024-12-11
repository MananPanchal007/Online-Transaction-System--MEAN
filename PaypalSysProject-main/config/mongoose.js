const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://webappadmin_02:25nzsvcMsX0iLCU6@cluster0.wt1xz.mongodb.net/SkillBuildingJournal'
    );
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
