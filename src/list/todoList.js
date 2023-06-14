import { onCreateTask } from './createTask';
import { onToggleTask } from './updateTask';
import { onDeleteTask } from './deleteTask';

export const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector('.create-task-btn');
  createBtnElem.addEventListener('click', onCreateTask);
  const todoListElem = document.querySelector('.list');
  todoListElem.addEventListener('click', onToggleTask);
  const deleteBtnElem = document.querySelector('.list-item__delete-btn');
  deleteBtnElem.addEventListener('click', onDeleteTask);
};
