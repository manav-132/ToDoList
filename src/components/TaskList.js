import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../redux/action';
import { List, ListItem, ListItemText, IconButton, ListItemSecondaryAction, Card, CardContent, Typography } from '@mui/material';
import { Delete, Edit, CheckCircle, RadioButtonUnchecked } from '@mui/icons-material';
import './TaskList.css';

// Component for displaying the list of tasks
const TaskList = () => {
  const tasks = useSelector((state) => state.tasks); // Get tasks from Redux store
  const dispatch = useDispatch(); // Redux dispatch function

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId)); // Dispatch action to delete the task
  };

  const handleEdit = (taskId) => {
    const newText = prompt("Edit Task:"); // Prompt for new task text
    if (newText !== null && newText.trim() !== "") {
      dispatch(editTask(taskId, { text: newText })); // Dispatch action to edit the task
    }
  };

  const handleToggle = (taskId) => {
    dispatch(toggleTask(taskId)); // Dispatch action to toggle the task's completed state
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
