import React from "react";

export default function TodoItem({ todo, deleteTodo, toggleCompletion }) {
    return (
        <li className="list-row">
            <input
                onClick={() => toggleCompletion(todo.id)}
                type="checkbox"
                className="checkbox checkbox-primary"
            />
            <p className={todo.isComplete ? "line-through text-gray-400" : ""}>{todo.text}</p>

            <button className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--edit] text-base-content"></span>
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--delete] text-base-content"></span>
            </button>
        </li>
    );
}
