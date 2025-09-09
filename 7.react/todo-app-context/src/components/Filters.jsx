const buttons = ["all", "active", "completed"];

export default function Filters({ filter, setFilter, itemsLeft, clearCompleted }) {
    return (
        <section className="text-center text-gray-300 mt-4">
            <div className="card flex bg-base-100 shadow-lg p-4 rounded-box">
                <p>
                    <span>{itemsLeft}</span> Items left
                </p>
                <div role="tablist" className="flex justify-center gap-2 tabs">
                    {buttons.map((button, i) => (
                        <button
                            key={"button" + i}
                            role="tab"
                            className={`tab font-medium hover:font-extrabold hover:text-primary capitalize ${
                                filter === button ? "text-primary tab-active font-extrabold" : ""
                            }`}
                            onClick={() => setFilter(button)}
                        >
                            {button}
                        </button>
                    ))}
                </div>
                <button className="btn btn-ghost" onClick={clearCompleted}>
                    Clear Completed
                </button>
            </div>
        </section>
    );
}
