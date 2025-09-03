import React from "react";

export default function TodoItem({ todo }) {
    return (
        <li className="list-row">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <p>{todo.text}</p>

            <button className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--edit] text-base-content"></span>
            </button>
            <button className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--delete] text-base-content"></span>
            </button>
        </li>
    );
}
