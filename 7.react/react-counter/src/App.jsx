import React, { useEffect, useState } from "react";

export default function App() {
    const [counter, setCounter] = useState(0);

    useEffect(() => {
        document.title = `you clicked ${counter} times`;
    }, [counter]);

    const increment = () => {
        if (counter < 5) setCounter(counter + 1);

        return;
    };

    return (
        <div>
            <nav class="flex items-center justify-between flex-wrap bg-teal-600 p-6 shadow-lg">
                <div class="flex items-center flex-shrink-0 text-white mr-6">
                    <span class="font-semibold text-2xl tracking-tight">My Awesome Site</span>
                </div>
                <div class="block lg:hidden">
                    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                        <svg
                            class="fill-current h-3 w-3"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>
                <div
                    class="w-full block flex-grow lg:flex lg:items-center lg:w-auto hidden lg:block"
                    id="nav-content"
                >
                    <div class="text-lg lg:flex-grow">
                        <a
                            href="#"
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition-colors"
                        >
                            Home
                        </a>
                        <a
                            href="#"
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4 transition-colors"
                        >
                            About
                        </a>
                        <a
                            href="#"
                            class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white transition-colors"
                        >
                            Contact
                        </a>
                    </div>
                    <div>
                        <a
                            href="#"
                            class="inline-block text-lg px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 transition-colors"
                        >
                            Download
                        </a>
                    </div>
                </div>
            </nav>
            <p className="text-red-500 text-[150px] text-center m-5">{counter}</p>
            <button onClick={() => increment()}>+1</button>
            <button onClick={() => setCounter(0)}>Reset</button>
            <button onClick={() => setCounter(counter - 1)}>-1</button>
            <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg shadow-inner mt-6">
                <div class="h-24 bg-yellow-400 hover:bg-blue-300 hover:text-white flex items-center justify-center text-gray-800 rounded">
                    Grid Item A
                </div>
                <div class="h-24 bg-purple-400 flex items-center justify-center text-white rounded">
                    Grid Item B
                </div>
                <div class="h-24 bg-pink-400 flex items-center justify-center text-white rounded">
                    Grid Item C
                </div>
            </div>
            <button class="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-blue-300">
                Click Me
            </button>

            <button class="px-6 py-3 border border-gray-300 text-gray-800 font-semibold rounded-lg shadow-sm hover:bg-gray-100 transition-colors duration-200 ml-4">
                Learn More
            </button>

            <button class="px-6 py-3 bg-red-500 text-white font-semibold rounded-full hover:bg-red-600 transition-colors duration-200 focus:outline-none focus:ring-4 focus:ring-red-300 ml-4">
                Delete Account
            </button>
        </div>
    );
}
