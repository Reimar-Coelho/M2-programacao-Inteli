const db = require('../config/database');

class UserModel {
  async getAllUsers() {
    try {
      const result = await db.query('SELECT * FROM users ORDER BY created_at DESC');
      return result.rows;
    } catch (error) {
      throw new Error(`Erro ao buscar usuários: ${error.message}`);
    }
  }

  async getUserById(id) {
    try {
      const result = await db.query('SELECT * FROM users WHERE id = $1', [id]);
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao buscar usuário por ID: ${error.message}`);
    }
  }

  async createUser(userData) {
    const { id, name, email } = userData;
    
    try {
      const result = await db.query(
        'INSERT INTO users (id, name, email, created_at) VALUES ($1, $2, $3, NOW()) RETURNING *',
        [id, name, email]
      );
      return result.rows[0];
    } catch (error) {
      throw new Error(`Erro ao criar usuário: ${error.message}`);
    }
  }
}

module.exports = new UserModel();
