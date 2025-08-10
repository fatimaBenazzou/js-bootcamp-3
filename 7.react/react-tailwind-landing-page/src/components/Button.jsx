export default function Button({ href, onClick, children, className = "" }) {
    const baseClasses =
        "button relative items-center justify-center h-11 transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg focus:scale-105 focus:shadow-lg active:scale-95";

    if (href) {
        return (
            <a href={href} className={baseClasses + className}>
                {children}
            </a>
        );
    }

    return (
        <button onClick={onClick} className={baseClasses + className}>
            {children}
        </button>
    );
}
