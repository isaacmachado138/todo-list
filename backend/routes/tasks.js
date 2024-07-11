const express = require('express');
const router = express.Router();
const db = require('../DB/db');

/* Importando actions */
const { listTasks, createTask, updateTask, deleteTask } = require('../modules/Actions/TaskActions');

// GET /tasks: Retornar todas as tarefas
router.get('/', async (req, res) => {
  try {
    listTasks(db, (err, tasks) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).json(tasks);
      }  
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST /tasks: Criar uma nova tarefa
router.post('/', async (req, res) => {
  try {
    createTask(db, req.body, (err, newTask) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(201).json(newTask);
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT /tasks/:id: Atualizar uma tarefa existente
router.put('/:id', async (req, res) => {
  try {
    updateTask(db, req.params.id, req.body, (err, updatedTask) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).json(updatedTask);
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE /tasks/:id: Excluir uma tarefa
router.delete('/:id', async (req, res) => {
  try {
    deleteTask(db, req.params.id, (err) => {
      if (err) {
        res.status(401).send(err);
      } else {
        res.status(200).json({ message: 'Tarefa excluída' });
      }
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
