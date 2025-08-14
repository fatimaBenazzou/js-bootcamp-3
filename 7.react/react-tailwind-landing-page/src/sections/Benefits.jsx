import BenefitCard from "../components/BenefitCard";
import Heading from "../components/Heading";

const BENEFITS = [
    {
        id: "ask-anything",
        title: "Ask Anything",
        text: "Get instant answers to your questions with our advanced AI-powered search and response system.",
        iconUrl: "/benefits/icon-1.svg",
        imageUrl: "/benefits/image-2.png",
    },
    {
        id: "continuous-improvement",
        title: "Continuous Learning",
        text: "Our AI learns from every interaction, providing increasingly accurate and personalized responses.",
        iconUrl: "/benefits/icon-2.svg",
        imageUrl: "/benefits/image-2.png",
        light: true,
    },
    {
        id: "universal-access",
        title: "Universal Access",
        text: "Connect from anywhere, on any device, with seamless synchronization across all platforms.",
        iconUrl: "/benefits/icon-3.svg",
        imageUrl: "/benefits/image-2.png",
    },
    {
        id: "lightning-fast",
        title: "Lightning Fast",
        text: "Experience near-instantaneous responses with our optimized AI infrastructure and edge computing.",
        backgroundUrl: "/benefits/card-4.svg",
        iconUrl: "/benefits/icon-4.svg",
        imageUrl: "/benefits/image-2.png",
        light: true,
    },
    {
        id: "intelligent-suggestions",
        title: "Smart Suggestions",
        text: "Receive proactive recommendations and insights based on your usage patterns and preferences.",
        iconUrl: "/benefits/icon-1.svg",
        imageUrl: "/benefits/image-2.png",
    },
    {
        id: "collaborative-ai",
        title: "Collaborative AI",
        text: "Work seamlessly with our AI assistant that adapts to your team's workflow and communication style.",
        iconUrl: "/benefits/icon-2.svg",
        imageUrl: "/benefits/image-2.png",
    },
];

export default function Benefits() {
    return (
        <section id="features" className="container relative z-2">
            <Heading
                className="md:max-w-md lg:max-w-2xl"
                title="Chat Smarter, Not Harder with Brainwave"
            />

            <ul className="flex flex-wrap gap-10 mb-10">
                {BENEFITS.map((item, i) => (
                    <BenefitCard key={"benefit" + i} item={item} />
                ))}
            </ul>
        </section>
    );
}
