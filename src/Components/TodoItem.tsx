import { Trash2 } from "lucide-react";
import { Todo } from "../Type/todo";

interface TodoItemProps {
  todo: Todo;
  onCompleteChange: (id: number, completed: boolean) => void;
  onDelete: (id: number) => void;
}

export default function TodoItem({
  todo,
  onCompleteChange,
  onDelete,
}: TodoItemProps) {
  return (
    <div className="flex items-center gap-1 ">
      <label
        className="flex  items-center gap-2 border rounded-md p-2
       border-blue-400 bg-white hover:bg-blue-50 grow"
      >
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onCompleteChange(todo.id, e.target.checked)}
          className="scale-125"
        />
        {/* applied ternary operator */}
        <span
          className={todo.completed ? "line-through text-blue-300-400" : ""}
        >
          {todo.title}
        </span>
      </label>
      <button
        onClick={() => onDelete(todo.id)}
        className="p-2 hover:no-underline  "
      >
        <Trash2 size={20} className="text-red-600 hover:bg-red-200" />
      </button>
    </div>
  );
}
