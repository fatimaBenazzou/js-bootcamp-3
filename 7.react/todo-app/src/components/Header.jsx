export default function Header({ toggleTheme, theme }) {
    return (
        <header className="flex justiry-between items-center mb-8">
            <h1 className="text-4xl font-bold text-white tracking-widest">TODO</h1>
            <button
                onClick={toggleTheme}
                className="btn btn-ghost hover:bg-transparent hover:border-0"
            >
                <img
                    src={theme === "dark" ? "./images/icon-sun.svg" : "./images/icon-moon.svg"}
                    className="w-6 h-6"
                />
            </button>
        </header>
    );
}
