const bouton = document.querySelector('#bouton');
const task   = document.querySelector('#task');
const date = document.querySelector('#date');
const URL = '/send';

bouton.addEventListener('click', (event) => {
  event.preventDefault();
  const todo = {
    t: task.value,
    d: date.value
  }
  console.log(todo);
  fetch(URL, {
    method: 'POST',
    headers: {
        "Content-Type": "application/json"
      },
    body: JSON.stringify(todo)
  })
  .then(response => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err.message);
  });
});
