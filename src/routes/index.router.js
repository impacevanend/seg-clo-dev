const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/login', (req, res) => res.render('login'));
router.post('/login', (req, res) => {
  const { username } = req.body;
  
  res.send(`Hola ${username || 'usuario'}. (login simulado)`);
});
router.get('/search', (req, res) => {
  const q = req.query.q || '';
  
  res.send(`<h1>Resultados para: ${q}</h1>`);
});
module.exports = router;
