import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../redux/action';
import { TextField, Button } from '@mui/material';

// Component for adding a new task
const TaskInput = () => {
  const [task, setTask] = useState(''); // State to hold the task input value
  const dispatch = useDispatch(); // Redux dispatch function

  const handleAddTask = () => {
    if (task.trim()) {
      // Dispatch action to add the task to the store
      dispatch(addTask({ id: Date.now(), text: task, completed: false }));
      setTask(''); // Clear the input field
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
