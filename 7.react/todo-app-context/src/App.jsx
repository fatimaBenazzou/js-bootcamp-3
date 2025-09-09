import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Filters from "./components/Filters";
import useTheme from "./hooks/useTheme";
import TodoProvider from "./providers/TodoProvider";

export default function App() {
    const { theme } = useTheme();

    return (
        <div
            data-theme={theme}
            style={{
                backgroundImage: `url(/images/bg-desktop-${theme}.jpg `,
                backgroundSize: "100vw 100vh",
            }}
            className={` min-h-screen bg-no-repeat w-full`}
        >
            <TodoProvider>
                <div className="container mx-auto px-4 pt-12 max-w-md">
                    <Header />
                    <main>
                        <TodoList />
                        <Filters />
                    </main>
                </div>
            </TodoProvider>
        </div>
    );
}
