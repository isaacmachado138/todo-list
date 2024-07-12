function listTasks(db, identifier = '', callback) {
  console.log('Listing task(s)...');

  let queryText = 'SELECT * FROM task WHERE 1=1 ';
  let queryParams = [];
  bSearchId = false;

  if (Number(identifier) && identifier != 0) {
    queryText += ' AND task_id = $1';
    queryParams.push(identifier);
    bSearchId = true;
  } else if(identifier !== '' && identifier != 0) {
    queryText += ' AND task_end = $1';
    queryParams.push(identifier);
  }


  console.log(queryText);
  console.log(queryParams);

  db.query(queryText, queryParams, (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      if (bSearchId) {
        // Se um ID foi fornecido, retorna apenas o primeiro resultado encontrado
        callback(null, res.rows[0]);
      } else {
        // Senão, retorna todos os resultados encontrados
        callback(null, res.rows);
      }
    }
  }); 
}

function createTask(db, taskData, callback) {
  const { task_name, task_desc, task_end } = taskData;
  console.log('Inserting new task...')
  db.query(
    'INSERT INTO task (task_name, task_desc, task_end) VALUES ($1, $2, $3) RETURNING task_id',
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
    'UPDATE task SET task_name = $1, task_desc = $2, task_end = $3 WHERE task_id = $4 RETURNING task_id',
    [task_name, task_desc, task_end, id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, 'Registro atualizado com sucesso!');
      }
    }
  );
}

function deleteTask(db, id, callback) {
  console.log('Delete task ID: ' + id)
  db.query('DELETE FROM task WHERE task_id = $1', [id], (err, res) => {
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
