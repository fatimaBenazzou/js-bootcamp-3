import React from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, addTodo }) {
    return (
        <section>
            <TodoAdd addTodo={addTodo} />
            <ul className="list bg-base-100 shadow-lg rounded-box">
                {todos.map((todo) => (
                    <TodoItem key={todo.id} todo={todo} />
                ))}
            </ul>
        </section>
    );
}
