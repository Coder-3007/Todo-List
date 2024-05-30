import { useState } from "react";

interface AddFromProps {
  onSubmit: (title: string) => void;
}

export default function AddForm({ onSubmit }: AddFromProps) {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!input.trim) return;

    onSubmit(input);
    setInput("");
  }
  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="needs to do"
        className="rounded-s-md grow border border-gray-400 p-2"
      />
      <button
        type="submit"
        className="w-16 rounded-e-sm bg-blue-600 text-white hover:bg-slate-800"
      >
        Add
      </button>
    </form>
  );
}
