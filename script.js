const form = document.getElementById('habit-form');
const input = document.getElementById('habit-input');
const list = document.getElementById('habit-list');

let habits = JSON.parse(localStorage.getItem('habits')) || [];

function renderHabits() {
  list.innerHTML = '';
  habits.forEach((habit, index) => {
    const li = document.createElement('li');
    li.textContent = habit;
    const delBtn = document.createElement('button');
    delBtn.textContent = 'Remove';
    delBtn.onclick = () => {
      habits.splice(index, 1);
      saveAndRender();
    };
    li.appendChild(delBtn);
    list.appendChild(li);
  });
}

function saveAndRender() {
  localStorage.setItem('habits', JSON.stringify(habits));
  renderHabits();
}

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const habit = input.value.trim();
  if (habit) {
    habits.push(habit);
    input.value = '';
    saveAndRender();
  }
});

renderHabits();
