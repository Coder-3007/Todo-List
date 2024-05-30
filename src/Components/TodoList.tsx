import { Todo } from "../Type/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todo: Todo[];
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoList({
  todos,
  onCompleteChange,
  onDelete,
}: TodoListProps) {
  const todoSorted = todos.sort((a, b) => {
    if (a.completed === b.completed) {
      return a.id - b.id;
    }
    return a.completed ? 1 : -1;
  });
  return (
    <div>
      <div className="space-y-2">
        {todoSorted.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onCompleteChange={onCompleteChange}
            onDelete={onDelete}
          />
        ))}
      </div>
      {todos.length === 0 && (
        <div className="text-center">
          <h1 className="font-bold text-3xl text-gray-600">
            You have no todos
          </h1>
        </div>
      )}
    </div>
  );
}
