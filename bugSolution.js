const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  //Validate User ID
  if (!userId || isNaN(parseInt(userId))) {
    return res.status(400).send('Invalid User ID');
  }
  // ... some database operation to fetch user with userId ...
  if (!user) {
    return res.status(404).send('User not found');
  }
  res.send(user); 
});