import React, { useState } from "react";
import { useTodo } from "../hooks/useTodos";

export default function TodoAdd() {
    const { addTodo } = useTodo();
    const [newTodoText, setNewTodoText] = useState("");

    const handleAddTodo = () => {
        addTodo(newTodoText);
        setNewTodoText("");
    };

    return (
        <div className="card bg-base-100 shadow-lg p-4 mb-4 rounded-lg">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Create a new todo..."
                    className="input input-ghost w-full flex-1"
                    value={newTodoText}
                    onChange={(e) => setNewTodoText(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddTodo()}
                />
                <button
                    onClick={handleAddTodo}
                    className="btn btn-circle btn-ghost border-gray-600"
                >
                    <span className="icon-[iwwa--add] text-base-content"></span>
                </button>
            </div>
        </div>
    );
}
