const BRAINWAVE_SERVICES = [
    "Advanced Photo Generation",
    "Intelligent Photo Enhancement",
    "Seamless Platform Integration",
];

const ServicesList = ({ className = "" }) => {
    return (
        <ul className={`body-2 ${className}`}>
            {BRAINWAVE_SERVICES.map((item, index) => (
                <li key={index} className="flex py-4 border-t border-neutral-2">
                    <img width={24} height={24} src={"/check.svg"} />
                    <p className="ml-4 text-neutral">{item}</p>
                </li>
            ))}
        </ul>
    );
};

export default ServicesList;
