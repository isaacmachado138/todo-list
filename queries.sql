CREATE DATABASE db_todolist;

CREATE TABLE task (
  task_id SERIAL PRIMARY KEY,
  task_name VARCHAR(100),
  task_desc TEXT,
  task_end BOOLEAN
);