import React from "react";
import TodoAdd from "./TodoAdd";
import TodoItem from "./TodoItem";

export default function TodoList() {
    return (
        <section>
            <TodoAdd />
            <ul className="list bg-base-100 shadow-lg rounded-box">
                <TodoItem text={"test"} />
                <TodoItem text={"test 2"} />
            </ul>
        </section>
    );
}
