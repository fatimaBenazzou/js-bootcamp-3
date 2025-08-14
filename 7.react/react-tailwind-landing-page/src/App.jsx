import Header from "./components/Header";
import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Hero from "./sections/Hero";

export default function App() {
    return (
        <main className="font-sora bg-bg text-base w-full min-h-screen overflow-hidden ">
            {/* header */}
            <Header />
            {/* main content */}
            <Hero />
            <Benefits />
            <Collaboration />
            {/* footer */}
        </main>
    );
}
