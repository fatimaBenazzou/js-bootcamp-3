import React from "react";

export default function Filters() {
    return (
        <section className="text-center text-gray-300 mt-4">
            <div className="card flex bg-base-100 shadow-lg p-4 rounded-box">
                <p>
                    <span>0</span> Items left
                </p>
                <div role="tablist" className="flex justify-center gap-2 tabs">
                    <button
                        role="tab"
                        className="tab font-medium hover:font-extrabold hover:text-primary"
                    >
                        All
                    </button>
                    <button
                        role="tab"
                        className="tab font-medium hover:font-extrabold hover:text-primary"
                    >
                        Active
                    </button>
                    <button
                        role="tab"
                        className="tab font-medium hover:font-extrabold hover:text-primary"
                    >
                        Completed
                    </button>
                </div>
                <button className="btn btn-ghost">Clear Completed</button>
            </div>
        </section>
    );
}
