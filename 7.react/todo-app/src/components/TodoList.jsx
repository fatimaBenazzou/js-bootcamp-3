import React, { useRef, useState } from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, addTodo, deleteTodo, toggleCompletion, editTodo }) {
    const [dialog, setDialog] = useState({ id: null, text: "" });
    const dialogRef = useRef(null);

    const saveEdit = () => {
        editTodo(dialog.id, dialog.text);
        dialogRef.current?.close();
    };

    return (
        <section>
            <TodoAdd addTodo={addTodo} />
            <ul className="list bg-base-100 shadow-lg rounded-box">
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        deleteTodo={deleteTodo}
                        toggleCompletion={toggleCompletion}
                        onEditRequest={(id, currentValue) => {
                            setDialog({ id, text: currentValue });
                            dialogRef.current?.showModal();
                        }}
                    />
                ))}
            </ul>

            <dialog ref={dialogRef} className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Edit Todo</h3>
                    <input
                        type="text"
                        value={dialog.text}
                        onChange={(e) => setDialog((p) => ({ ...p, text: e.target.value }))}
                        className="input input-bordered w-full mt-4"
                    />
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={saveEdit}>
                                Save
                            </button>
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </section>
    );
}
