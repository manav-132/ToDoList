import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { Container, Typography, Paper } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#e0f7fa',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="app-background">
        <Container maxWidth="sm" style={{ marginTop: '2rem' }}>
          <Paper elevation={3} style={{ padding: '2rem' }}>
            <Typography variant="h4" component="h1" gutterBottom align="center" color="primary">
              React To-Do App
            </Typography>
            <TaskInput />
            <TaskList />
          </Paper>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
