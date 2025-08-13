import Button from "./Button";

const NAVIGATION = [
    {
        title: "Features",
        url: "#features",
    },
    {
        title: "Pricing",
        url: "#pricing",
    },
    {
        title: "How to use",
        url: "#how-to-use",
    },
    {
        title: "Roadmap",
        url: "#roadmap",
    },
    {
        title: "New account",
        url: "#signup",
        onlyMobile: true,
    },
    {
        title: "Sign in",
        url: "#login",
        onlyMobile: true,
    },
];

export default function Header() {
    return (
        <header className={`fixed top-0 left-0  w-full border-b border-border z-50 transition-all`}>
            <nav className="flex items-center justify-between px-5 lg:px-8 xl:px-10 max-lg:py-4">
                {/* logo */}
                <a
                    href="#hero"
                    className="block w-48 xl:mr-8 transition-transform duration-300 hover:scale-105"
                >
                    <img src="/brainwave.svg" alt="Brainwave" />
                </a>

                {/* links */}
                <div className="flex ">
                    <ul
                        className={`flex flex-col lg:flex-row items-center justify-center m-auto z-20 gap-12`}
                    >
                        {NAVIGATION.map((link, index) => (
                            <li
                                key={"nav link" + index}
                                className={`block relative font-code text-2xl uppercase hover:text-accent-lavender  ${
                                    link.onlyMobile ? "lg:hidden" : ""
                                } py-6 md:py-8 lg:text-xs lg:font-semibold`}
                            >
                                <a href={link.url}>{link.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* actions */}
                <div>
                    <Button white={true}>New Account</Button>
                    <Button className="hidden lg:flex" href="#login">
                        Sign in
                    </Button>
                </div>
            </nav>
        </header>
    );
}
