function listTasks(db, callback) {
  console.log('Listing all task...')
  db.query('SELECT * FROM task', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res.rows);
    }
  });
}

function createTask(db, taskData, callback) {
  const { task_name, task_desc, task_end } = taskData;
  console.log('Inserting new task...')
  db.query(
    'INSERT INTO tasks (task_name, task_desc, task_end) VALUES ($1, $2, $3) RETURNING *',
    [task_name, task_desc, task_end],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows[0]);
      }
    }
  );
}

function updateTask(db, id, taskData, callback) {
  const { task_name, task_desc, task_end } = taskData;
  console.log('Updating task ID: ' + id)
  db.query(
    'UPDATE tasks SET task_name = $1, task_desc = $2, task_end = $3 WHERE task_id = $4 RETURNING *',
    [task_name, task_desc, task_end, id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res.rows[0]);
      }
    }
  );
}

function deleteTask(db, id, callback) {
  console.log('Delete task ID: ' + id)
  db.query('DELETE FROM tasks WHERE task_id = $1', [id], (err, res) => {
    if (err) {
      callback(err);
    } else {
      callback(null);
    }
  });
}

module.exports = {
  listTasks,
  createTask,
  updateTask,
  deleteTask
}; 
