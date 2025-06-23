const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>Frontend running!</h1>');
});

app.get('/secret', (req, res) => {
  const secret = process.env.FRONTEND_SECRET || 'not set';
  res.send(`<h2>FRONTEND_SECRET: ${secret}</h2>`);
});

app.listen(PORT, () => {
  console.log(`Frontend service listening on port ${PORT}`);
}); 