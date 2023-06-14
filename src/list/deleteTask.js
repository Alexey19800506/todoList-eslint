import { renderTasks } from './renderer';
import { setItem } from './storage';
import { deleteTask, getTasksList } from './tasksGateway';

export const onDeleteTask = (e) => {
  const deleteBtn = e.target.classList.contains('list-item__delete-btn');
  if (!deleteBtn) {
    return;
  }

  const taskId = e.target.dataset.id;

  deleteTask(taskId)
    .then(() => getTasksList())
    .then((newTasksList) => {
      setItem('tasksList', newTasksList);
      renderTasks();
    });
};
