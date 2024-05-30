import AddForm from "./Components/AddForm";
import TodoList from "./Components/TodoList";
import TodoSummary from "./Components/TodoSummary";

import useTodos from "./Components/useTodos";

function App() {
  // using custom hooks
  const {
    todos,
    addTodo,
    setTodoCompleted,
    deleteTodo,
    deleteAllCompletedTodos,
  } = useTodos();

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
      <TodoSummary todos={todos} deleteAllCompleted={deleteAllCompletedTodos} />
    </main>
  );
}

export default App;
