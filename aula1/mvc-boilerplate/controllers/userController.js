// controllers/userController.js

const UserModel = require('../models/userModel');

class UserController {
  async getAllUsers(req, res) {
    try {
      const users = await UserModel.getAllUsers();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getUserById(req, res) {
    const { id } = req.params;
    
    try {
      const user = await UserModel.getUserById(id);
      
      if (!user) {
        return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createUser(req, res) {
    const userData = req.body;
    
    if (!userData.name || !userData.email) {
      return res.status(400).json({ message: 'Nome e email são obrigatórios' });
    }
    
    try {
      const newUser = await UserModel.createUser(userData);
      return res.status(201).json(newUser);
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
