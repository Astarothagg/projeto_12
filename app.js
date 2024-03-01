// app.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/crud-app', { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Modelo Mongoose para Livro
const Book = mongoose.model('Book', {
  title: String,
  author: String,
  year: Number
});

// Rota para listar todos os livros
app.get('/books', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para criar um novo livro
app.post('/books', async (req, res) => {
  const { title, author, year } = req.body;
  const book = new Book({ title, author, year });

  try {
    const savedBook = await book.save();
    res.json(savedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Rota para excluir um livro
app.delete('/books/:bookId', async (req, res) => {
  const { bookId } = req.params;

  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
    res.json(deletedBook);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
