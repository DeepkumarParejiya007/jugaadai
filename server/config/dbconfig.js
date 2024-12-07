const mongoose = require('mongoose');
const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
const dotenv = require('dotenv');
require('dotenv').config();

// for mongodb database

const connectMongoDB = async() => {
  try {
    const uri = process.env.MONGO_URI; 
    if (!uri) {
      throw new Error("MongoDB URI is undefined. Check your .env file.");
    }
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected Successfully");

  } catch(err) {
        console.log('Mongodb Connection Error:',err);
        process.exit(1);
    }
}

const connectOracleDB = async () => {
    try {
      await oracledb.createPool({
        user: "COMP214_F24_zo_50",
        password: "password",
        connectString: "199.212.26.208:1521/SQLD" || "oracle1.centennialcollege.ca:1521/SQLD",
        poolTimeout: 60,
        enableStatistics: true,
      });
      console.log('Oracle DB connected...');
    } catch (err) {
      console.error('Oracle DB connection error:', err);
      process.exit(1);
    }
};

module.exports = {connectMongoDB, connectOracleDB};



