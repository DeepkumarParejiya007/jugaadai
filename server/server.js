const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');
const toolsRoutes = require('./routes/toolsRoutes');
const reviewRoutes = require('./routes/reviewRoutes')
const blogRoutes = require('./routes/blogRoutes');
const userRoutes = require('./routes/userRoutes');
const authRoutes = require('./routes/authRoutes');

require('dotenv').config();

const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT = ${PORT}`)
});

app.get('/', (req, res) => {
  res.send('Welcome to JugaadAI');
});

app.use(bodyParser.json());
app.use(cors());

app.use('/api/tools', toolsRoutes);
app.use('/api/reviews', reviewRoutes);
app.use('/api/blog', blogRoutes);
app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

const { connectMongoDB, connectOracleDB } = require('./config/dbconfig');
connectMongoDB();
connectOracleDB();

