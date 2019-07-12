const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log('MongoDB is Connected....');
  } catch (error) {
    console.error(error.message);
    //Exit porcess
    process.exit(1);
  }
};

module.exports = connectDB;
