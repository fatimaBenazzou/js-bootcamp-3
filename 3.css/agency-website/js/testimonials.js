const optionsT = { loop: true, align: "start" /*, direction: 'rtl' */ };
const emblaNodeT = document.querySelector("#review-slider");

const prevBtnNodeT = emblaNodeT.querySelector(".action .prev");
const nextBtnNodeT = emblaNodeT.querySelector(".action .next");

const pluginsT = [];
const emblaApiT = EmblaCarousel(emblaNodeT, optionsT, pluginsT);

const addTogglePrevNextBtnsActive = (emblaApi, prevBtn, nextBtn) => {
    const togglePrevNextBtnsState = () => {
        if (emblaApi.canScrollPrev()) prevBtn.removeAttribute("disabled");
        else prevBtn.setAttribute("disabled", "disabled");

        if (emblaApi.canScrollNext()) nextBtn.removeAttribute("disabled");
        else nextBtn.setAttribute("disabled", "disabled");
    };

    emblaApi
        .on("select", togglePrevNextBtnsState)
        .on("init", togglePrevNextBtnsState)
        .on("reInit", togglePrevNextBtnsState);

    return () => {
        prevBtn.removeAttribute("disabled");
        nextBtn.removeAttribute("disabled");
    };
};

const addPrevNextBtnsClickHandlers = (emblaApi, prevBtn, nextBtn) => {
    const scrollPrev = () => {
        emblaApi.scrollPrev();
    };
    const scrollNext = () => {
        emblaApi.scrollNext();
    };
    prevBtn.addEventListener("click", scrollPrev, false);
    nextBtn.addEventListener("click", scrollNext, false);

    const removeTogglePrevNextBtnsActive = addTogglePrevNextBtnsActive(emblaApi, prevBtn, nextBtn);

    return () => {
        removeTogglePrevNextBtnsActive();
        prevBtn.removeEventListener("click", scrollPrev, false);
        nextBtn.removeEventListener("click", scrollNext, false);
    };
};

emblaApiT.on("destroy", addPrevNextBtnsClickHandlers(emblaApiT, prevBtnNodeT, nextBtnNodeT));
