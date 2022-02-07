const express = require('express');
const connectDB = require('./config/db')
const app = express();

// connect DB
connectDB()

// Init Middleware
app.use(express.json({ extended: false }));

// define routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/users', require('./routes/users'));
app.use('/api/camp', require('./routes/camp'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
