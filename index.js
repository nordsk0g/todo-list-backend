const express = require("express");
const app = express();

let todos = [
  {
    id: 1,
    content: "Begin app",
    completed: true,
    date: '"2019-12-26T02:33:24.785Z"'
  },
  {
    id: 2,
    content: "Play golf",
    completed: true,
    date: '"2019-12-27T02:33:24.785Z"'
  },
  {
    id: 3,
    content: "Buy groceries",
    completed: true,
    date: '"2019-12-27T02:33:40.754Z"'
  },
  {
    id: 4,
    content: "Finish app",
    completed: false,
    date: '"2019-12-27T02:33:52.762Z"'
  },
  {
    id: 5,
    content: "Add completion functionality",
    completed: true,
    date: '"2019-12-28T02:23:05.978Z"'
  },
  {
    id: 6,
    content: "Brainstorm more features",
    completed: false,
    date: '"2019-12-28T07:47:02.439Z"'
  }
];

app.get("/", (request, response) => {
  response.send("<h1>To-do List</h1>");
});

app.get("/todos", (request, response) => {
  response.json(todos);
});

app.get("/todos/:id", (request, response) => {
  const id = Number(request.params.id);
  const todo = todos.find(todo => todo.id === id);

  todo ? response.json(todo) : response.status(404).end();
});

app.delete("todos/:id", (request, response) => {
  const id = Number(request.params.id);
  todos = todos.filter(todo => todo.id !== id);

  response.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
