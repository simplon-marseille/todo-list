
const arrayOfTasks = document.querySelectorAll('.list-group-item');

arrayOfTasks.forEach((task) => {
  task.addEventListener('click', (event) => {
    task.classList.toggle('line');
  });
});
