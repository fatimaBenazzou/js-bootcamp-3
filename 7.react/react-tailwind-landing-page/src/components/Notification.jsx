const notificationImages = [
    "/notification/image-4.png",
    "/notification/image-3.png",
    "/notification/image-2.png",
];

const Notification = ({ className, title }) => {
    return (
        <div
            className={`${
                className || ""
            } flex items-center p-4 pr-6 bg-neutral-2/40 backdrop-blur border border-neutral/10 rounded-2xl gap-5`}
        >
            <img
                src={"/notification/image-1.png"}
                width={62}
                height={62}
                alt="image"
                className="rounded-xl"
            />

            <div className="flex-1">
                <h6 className="mb-1 font-semibold text-base">{title}</h6>

                <div className="flex items-center justify-between">
                    <ul className="flex -m-0.5">
                        {notificationImages.map((item, index) => (
                            <li
                                key={index}
                                className="flex w-6 h-6 border-2 border-stroke rounded-full overflow-hidden"
                            >
                                <img
                                    src={item}
                                    className="w-full"
                                    width={20}
                                    height={20}
                                    alt={item}
                                />
                            </li>
                        ))}
                    </ul>
                    <div className="body-2 text-base">1m ago</div>
                </div>
            </div>
        </div>
    );
};

export default Notification;
