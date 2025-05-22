const express = require('express');
const router = express.Router();
const db = require('../config/db');
const UserController = require('../controllers/userController');

// Rota para listar usuários com tratamento adequado de erros
router.get('/', async (req, res, next) => {
  try {
    const result = await db.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (error) {
    console.error('Erro ao buscar usuários:', error);
    // Passa o erro para o middleware de tratamento de erros
    next(new Error(`Erro ao buscar usuários: ${error.message}`));
  }
});

// Rota GET /user/:id - Retorna um usuário específico
router.get('/:id', UserController.getUserById);

// Rota POST /user - Cria um novo usuário
router.post('/', UserController.createUser);

module.exports = router;
