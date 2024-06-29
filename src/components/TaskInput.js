import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import { TextField, Button, Box } from '@mui/material';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (task.trim()) {
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask('');
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" mb={3}>
      <TextField
        label="New Task"
        variant="outlined"
        fullWidth
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        style={{ marginRight: '1rem', backgroundColor: '#e3f2fd', borderRadius: '4px' }}
      />
      <Button variant="contained" color="primary" onClick={handleAddTask}>
        Add Task
      </Button>
    </Box>
  );
};

export default TaskInput;
