const express = require('express');
const router = express.Router();

router.get('/', (req, res) => res.render('index'));
router.get('/login', (req, res) => res.render('login'));
router.post('/login', (req, res) => {
  const { username } = req.body;
  // VULN intencional: sin hashing ni validación (más adelante lo parchamos)
  res.send(`Hola ${username || 'usuario'}. (login simulado)`);
});
router.get('/search', (req, res) => {
  const q = req.query.q || '';
  // VULN intencional: reflected output -> usaremos esto para XSS demo
  res.send(`<h1>Resultados para: ${q}</h1>`);
});
module.exports = router;
