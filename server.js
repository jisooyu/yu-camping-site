const express = require('express');
const app = express();

const fetchData = require('./campingsite/fetchData');

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', async (req, res) => {
  try {
    const response = await fetchData();
    console.log(response.data.response.body.items);
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
