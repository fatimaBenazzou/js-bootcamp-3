import CompanyLogos from "../components/CompanyLogos";
import HeroDescription from "../components/HeroDescription";
import HeroFigure from "../components/HeroFigure";

export default function Hero() {
    return (
        <section
            id="hero"
            className="py-10 lg:py-16 xl:py-20 container flex flex-col gap-12 relative"
        >
            {/* description */}
            <HeroDescription />
            {/* figure */}
            <HeroFigure />
            {/* logos */}
            <CompanyLogos className={"hidden relative lg:block"} />
        </section>
    );
}
