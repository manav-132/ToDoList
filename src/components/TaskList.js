import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/action';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Card, CardContent, Box, Typography } from '@mui/material';
import { Delete, Edit, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import './TaskList.css';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEdit = (taskId) => {
    const newText = prompt("Edit Task:");
    if (newText !== null && newText.trim() !== "") {
      dispatch(editTask(taskId, { text: newText }));
    }
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId));
  };

  return (
    <List>
      {tasks.map((task) => (
        <Card key={task.id} className={`task-card ${task.completed ? 'completed' : ''}`}>
          <CardContent>
            <ListItem dense>
              <IconButton onClick={() => handleToggle(task.id)}>
                {task.completed ? <CheckCircle color="primary" /> : <RadioButtonUnchecked />}
              </IconButton>
              <ListItemText
                primary={<Typography variant="body1" className="task-text">{task.text}</Typography>}
                style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" onClick={() => handleEdit(task.id)}>
                  <Edit />
                </IconButton>
                <IconButton edge="end" onClick={() => handleDelete(task.id)}>
                  <Delete />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          </CardContent>
        </Card>
      ))}
    </List>
  );
};

export default TaskList;
