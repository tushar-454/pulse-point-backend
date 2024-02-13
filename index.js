const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Pulse-point backend is running!');
});

app.listen(4000, () => {
  console.log(`Pulse-point backend is running on http://localhost:4000`);
});
