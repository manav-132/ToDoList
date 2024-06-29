import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './action';

// Initial state with tasks loaded from local storage if available
const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

// Reducer function to handle state changes
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const updatedTasksAdd = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(updatedTasksAdd)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasksAdd,
      };
    case DELETE_TASK:
      const updatedTasksDelete = state.tasks.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedTasksDelete)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasksDelete,
      };
    case EDIT_TASK:
      const updatedTasksEdit = state.tasks.map(task => 
        task.id === action.payload.taskId ? { ...task, ...action.payload.updatedTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksEdit)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasksEdit,
      };
    case TOGGLE_TASK:
      const updatedTasksToggle = state.tasks.map(task => 
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(updatedTasksToggle)); // Save tasks to local storage
      return {
        ...state,
        tasks: updatedTasksToggle,
      };
    default:
      return state;
  }
};

export default taskReducer;
