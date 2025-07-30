const optionsP = { loop: true, align: "start" /*, direction: 'rtl' */ };
const emblaNodeP = document.querySelector("#project-slider");
const dotsNodeP = emblaNodeP.querySelector(".project-dots");

const pluginsP = [];
const emblaApiP = EmblaCarousel(emblaNodeP, optionsP, pluginsP);
const addDotBtnsAndClickHandlers = (emblaApi, dotsNode) => {
    let dotNodes = [];

    const addDotBtnsWithClickHandlers = () => {
        dotsNode.innerHTML = emblaApi
            .scrollSnapList()
            .map(() => '<button class="dot" type="button"></button>')
            .join("");

        const scrollTo = (index) => {
            emblaApi.scrollTo(index);
        };

        dotNodes = Array.from(dotsNode.querySelectorAll(".dot"));
        dotNodes.forEach((dotNode, index) => {
            dotNode.addEventListener("click", () => scrollTo(index));
        });
    };

    const toggleDotBtnsActive = () => {
        const previous = emblaApi.previousScrollSnap();
        const selected = emblaApi.selectedScrollSnap();
        dotNodes[previous].classList.remove("dot--selected");
        dotNodes[selected].classList.add("dot--selected");
    };

    emblaApi
        .on("init", addDotBtnsWithClickHandlers)
        .on("reInit", addDotBtnsWithClickHandlers)
        .on("init", toggleDotBtnsActive)
        .on("reInit", toggleDotBtnsActive)
        .on("select", toggleDotBtnsActive);

    return () => {
        dotsNode.innerHTML = "";
    };
};
addDotBtnsAndClickHandlers(emblaApiP, dotsNodeP);
