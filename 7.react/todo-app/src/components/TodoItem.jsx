import React from "react";

export default function TodoItem({ text }) {
    return (
        <li className="list-row">
            <input type="checkbox" className="checkbox checkbox-primary" />
            <p>{text}</p>

            <button className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--edit] text-base-content"></span>
            </button>
            <button className="btn btn-ghost btn-sm">
                <span className="icon-[iwwa--delete] text-base-content"></span>
            </button>
        </li>
    );
}
