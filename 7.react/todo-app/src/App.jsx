import React, { useState } from "react";
import Header from "./components/Header";

export default function App() {
    const [theme, setTheme] = useState("dark");

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return (
        <div
            style={{
                backgroundImage: `url(/images/bg-desktop-${theme}.jpg `,
                backgroundSize: "100vw 100vh",
            }}
            className={` min-h-screen bg-no-repeat w-full`}
        >
            <div className="container mx-auto px-4 pt-12 max-w-md">
                <Header theme={theme} toggleTheme={toggleTheme} />
            </div>
        </div>
    );
}
