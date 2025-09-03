import React from "react";

export default function TodoAdd() {
    return (
        <div className="card bg-base-100 shadow-lg p-4 mb-4 rounded-lg">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Create a new todo..."
                    className="input input-ghost w-full flex-1"
                />
                <button className="btn btn-circle btn-ghost border-gray-600">
                    <span className="icon-[iwwa--add] text-base-content"></span>
                </button>
            </div>
        </div>
    );
}
