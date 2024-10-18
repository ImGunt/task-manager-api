const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // Para interpretar JSON no corpo das requisições

// Array para armazenar tarefas temporariamente
let tasks = [];

// Endpoint para criar uma nova tarefa (Create)
app.post('/tasks', (req, res) => {
  const { title, description } = req.body;
  const newTask = { id: tasks.length + 1, title, description };
  tasks.push(newTask);
  res.status(201).json(newTask); // Retorna a nova tarefa criada
});

// Endpoint para listar todas as tarefas (Read)
app.get('/tasks', (req, res) => {
  res.json(tasks); // Retorna todas as tarefas armazenadas
});

// Endpoint para atualizar uma tarefa específica (Update)
app.put('/tasks/:id', (req, res) => {
  const { id } = req.params; // Pega o ID da URL
  const { title, description } = req.body; // Pega o novo título e descrição do corpo da requisição
  const task = tasks.find(t => t.id === parseInt(id)); // Busca a tarefa pelo ID

  if (!task) {
    return res.status(404).json({ message: 'Tarefa não encontrada' }); // Retorna 404 se a tarefa não for encontrada
  }

  task.title = title; // Atualiza o título da tarefa
  task.description = description; // Atualiza a descrição da tarefa
  res.json(task); // Retorna a tarefa atualizada
});

// Endpoint para deletar uma tarefa específica (Delete)
app.delete('/tasks/:id', (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(t => t.id !== parseInt(id)); // Remove a tarefa pelo ID
  res.status(204).send(); // Retorna 204 indicando que a tarefa foi deletada
});

// Iniciar o servidor
app.listen(port, () => {
  console.log(`API rodando em http://localhost:${port}`);
});
