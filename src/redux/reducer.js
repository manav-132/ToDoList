import { ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK } from './action';

const initialState = {
  tasks: JSON.parse(localStorage.getItem('tasks')) || [],
};

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      const newTasks = [...state.tasks, action.payload];
      localStorage.setItem('tasks', JSON.stringify(newTasks));
      return {
        ...state,
        tasks: newTasks,
      };
    case DELETE_TASK:
      const remainingTasks = state.tasks.filter((task) => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(remainingTasks));
      return {
        ...state,
        tasks: remainingTasks,
      };
    case EDIT_TASK:
      const editedTasks = state.tasks.map((task) =>
        task.id === action.payload.taskId ? { ...task, ...action.payload.updatedTask } : task
      );
      localStorage.setItem('tasks', JSON.stringify(editedTasks));
      return {
        ...state,
        tasks: editedTasks,
      };
    case TOGGLE_TASK:
      const toggledTasks = state.tasks.map((task) =>
        task.id === action.payload ? { ...task, completed: !task.completed } : task
      );
      localStorage.setItem('tasks', JSON.stringify(toggledTasks));
      return {
        ...state,
        tasks: toggledTasks,
      };
    default:
      return state;
  }
};

export default taskReducer;
