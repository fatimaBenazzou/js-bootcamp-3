import React from "react";
import { useTodo } from "../hooks/useTodos";

export default function TodoItem({ todo }) {
    const { deleteTodo, toggleCompletion, onEditRequest } = useTodo();

    return (
        <li className="list-row">
            <input
                onChange={() => toggleCompletion(todo.id)}
                type="checkbox"
                className="checkbox checkbox-primary"
                checked={todo.isComplete}
            />
            <p className={todo.isComplete ? "line-through text-gray-400" : ""}>{todo.text}</p>

            <button
                className="btn btn-ghost btn-sm"
                onClick={() => onEditRequest(todo.id, todo.text)}
            >
                <span className="icon-[iwwa--edit] text-base-content"></span>
            </button>
            <button onClick={() => deleteTodo(todo.id)} className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--delete] text-base-content"></span>
            </button>
        </li>
    );
}
