// Academic Planner — interactive task management system.
// Demonstrates: arrays, functions, event handling, DOM manipulation,
// and dynamic content updates.

(function () {
  // Tasks live in memory as an array of objects for the length of the visit.
  // { id: number, text: string, done: boolean, created: string }
  var tasks = [];
  var nextId = 1;

  var form = document.getElementById("taskForm");
  var input = document.getElementById("taskInput");
  var list = document.getElementById("task-list");
  var emptyState = document.getElementById("emptyState");

  if (!form || !list) return; // Only run this script on planner.html

  function formattedDate() {
    var now = new Date();
    return now.toLocaleDateString(undefined, {
      month: "short",
      day: "numeric",
    });
  }

  function addTask(text) {
    tasks.push({
      id: nextId++,
      text: text,
      done: false,
      created: formattedDate(),
    });
    render();
  }

  function toggleComplete(id) {
    var task = tasks.find(function (t) {
      return t.id === id;
    });
    if (task) {
      task.done = !task.done;
      render();
    }
  }

  function deleteTask(id) {
    tasks = tasks.filter(function (t) {
      return t.id !== id;
    });
    render();
  }

  function buildTaskElement(task) {
    var li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");
    li.setAttribute("data-id", task.id);

    var completeBtn = document.createElement("button");
    completeBtn.className = "icon-btn complete";
    completeBtn.setAttribute(
      "aria-label",
      task.done ? "Mark as not done" : "Mark as done"
    );
    completeBtn.textContent = task.done ? "\u21BA" : "\u2713";
    completeBtn.addEventListener("click", function () {
      toggleComplete(task.id);
    });

    var textSpan = document.createElement("span");
    textSpan.className = "task-text";
    textSpan.textContent = task.text;

    var dateSpan = document.createElement("span");
    dateSpan.className = "task-date";
    dateSpan.textContent = task.created;

    var deleteBtn = document.createElement("button");
    deleteBtn.className = "icon-btn delete";
    deleteBtn.setAttribute("aria-label", "Delete task");
    deleteBtn.textContent = "\u00D7";
    deleteBtn.addEventListener("click", function () {
      deleteTask(task.id);
    });

    li.appendChild(completeBtn);
    li.appendChild(textSpan);
    li.appendChild(dateSpan);
    li.appendChild(deleteBtn);
    return li;
  }

  function render() {
    list.innerHTML = "";
    tasks.forEach(function (task) {
      list.appendChild(buildTaskElement(task));
    });
    emptyState.classList.toggle("show", tasks.length === 0);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    var value = input.value.trim();
    if (!value) return;
    addTask(value);
    input.value = "";
    input.focus();
  });

  render();
})();
