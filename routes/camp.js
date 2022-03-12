const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');

const Camp = require('../models/Camp');

const fetchData = require('../campingsite/fetchData');

router.get('/', async (req, res) => {
  try {
    const response = await fetchData();
    // console.log(
    //   'response.data.response.body.items.data',
    //   response.data.response.body.items
    // );
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send(error);
  }
});

router.post('/init', auth, async (req, res) => {
  try {
    const response = await fetchData();
    const camps = response.data.response.body.items.item;
    console.log('response.data', response.data);
    Camp.collection.insertMany(camps);
    console.log('Multiple documents are inserted');
    res.send(response.data.response.body.items);
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Error');
  }
});
module.exports = router;
