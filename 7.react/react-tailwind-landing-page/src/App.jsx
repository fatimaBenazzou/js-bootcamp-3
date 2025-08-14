import Footer from "./components/Footer";
import Header from "./components/Header";
import Benefits from "./sections/Benefits";
import Collaboration from "./sections/Collaboration";
import Hero from "./sections/Hero";
import Pricing from "./sections/Pricing";
import Roadmap from "./sections/Roadmap";
import Services from "./sections/Services";

export default function App() {
    return (
        <main className="font-sora bg-bg text-base w-full min-h-screen overflow-hidden ">
            {/* header */}
            <Header />
            {/* main content */}
            <Hero />
            <Benefits />
            <Collaboration />
            <Services />
            <Pricing />
            <Roadmap />
            {/* footer */}
            <Footer />
        </main>
    );
}
