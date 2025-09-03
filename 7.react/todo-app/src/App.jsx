import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";

export default function App() {
    const [theme, setTheme] = useState("dark");
    const [todos, setTodos] = useState([]);
    console.log({ todos });

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const addTodo = (text) => {
        if (text.trim() === "") return;

        const newTodo = {
            id: Date.now().toString(),
            text,
            isComplete: false,
        };

        setTodos([...todos, newTodo]);
    };

    return (
        <div
            data-theme={theme}
            style={{
                backgroundImage: `url(/images/bg-desktop-${theme}.jpg `,
                backgroundSize: "100vw 100vh",
            }}
            className={` min-h-screen bg-no-repeat w-full`}
        >
            <div className="container mx-auto px-4 pt-12 max-w-md">
                <Header theme={theme} toggleTheme={toggleTheme} />
                <main>
                    <TodoList todos={todos} addTodo={addTodo} />
                    <Filters />
                </main>
            </div>
        </div>
    );
}
