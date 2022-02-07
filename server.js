const express = require('express');
const app = express();

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/api/camp', require('./routes/camp'))

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
