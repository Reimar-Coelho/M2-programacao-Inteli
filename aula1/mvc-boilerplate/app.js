const express = require('express');
const app = express();
const path = require('path');
const alunosRoutes = require('./routes/alunos');
const bodyParser = require('body-parser');
const cursosRoutes = require('./routes/cursos');
const professoresRoutes = require('./routes/professores');
const userRoutes = require('./routes/userRoutes');

require('dotenv').config();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Middleware para iniciar conexão com banco de dados
app.use(async (req, res, next) => {
  try {
    // Verificar se a conexão já existe ou precisa ser inicializada
    if (req.path.startsWith('/user')) {
      console.log('Verificando conexão com banco de dados para rota de usuários...');
    }
    next();
  } catch (error) {
    console.error('Erro ao inicializar conexão:', error);
    res.status(500).json({ error: 'Erro na inicialização da conexão com o banco de dados' });
  }
});

app.use('/alunos', alunosRoutes);
app.use('/cursos', cursosRoutes);
app.use('/professores', professoresRoutes);
app.use('/user', userRoutes);

app.get('/', (req, res) => {
  res.redirect('/alunos');
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
  console.error('Erro na aplicação:', err);
  res.status(500).json({ error: err.message || 'Erro interno no servidor' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

module.exports = app;
