import { useState } from "react";

import { dummyData } from "./data/todos";
import AddForm from "./Components/AddForm";
import TodoList from "./Components/TodoList";

function App() {
  const [todos, setTodos] = useState(dummyData);

  function setTodoCompleted(id: number, completed: boolean) {
    // alert(
    //   `Todo with id ${id} is  ${completed ? "completed" : "not completed"}`
    // );

    setTodos((prevTodos) =>
      prevTodos.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  }

  function addTodo(title: string) {
    setTodos((prevTodos) => [
      {
        id: prevTodos.length + 1,
        title,
        completed: false,
      },
      ...prevTodos,
    ]);
  }

  function deleteTodo(id: number) {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  }
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl  text-center">Todo List</h1>
      <div className="max-w-lg mx-auto  bg-slate-100 rounded-md p-5 space-y-6">
        <AddForm onSubmit={addTodo} />
        <TodoList
          todos={todos}
          onCompleteChange={setTodoCompleted}
          onDelete={deleteTodo}
        />
      </div>
    </main>
  );
}

export default App;
