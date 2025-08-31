// Contact Form Validation
document.getElementById("contactForm")?.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!name || !email || !message) {
    formMessage.textContent = "Please fill in all fields.";
    formMessage.style.color = "red";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    formMessage.textContent = "Invalid email format.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Form submitted successfully!";
  formMessage.style.color = "green";
  this.reset();
});

// To-Do List with localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");
  if (!taskList) return;
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const li = document.createElement("li");
    li.textContent = task;
    const btn = document.createElement("button");
    btn.textContent = "❌";
    btn.onclick = () => {
      removeTask(task);
    };
    li.appendChild(btn);
    taskList.appendChild(li);
  });
}

function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();
  if (!task) return;
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  taskInput.value = "";
  loadTasks();
}

function removeTask(taskToRemove) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task !== taskToRemove);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

document.getElementById("addTaskBtn")?.addEventListener("click", addTask);
loadTasks();

// Product Listing with Filtering & Sorting
const products = [
  { name: "Laptop", category: "tech", price: 1000, rating: 4.5 },
  { name: "Book", category: "books", price: 20, rating: 4.8 },
  { name: "Headphones", category: "tech", price: 200, rating: 4.2 },]