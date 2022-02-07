const express = require('express');
const router = express.Router();

const fetchData = require('../campingsite/fetchData');

router.get('/', async (req, res) => {
  try {
    const response = await fetchData();
    console.log(response.data.response.body.items);
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

module.exports = router