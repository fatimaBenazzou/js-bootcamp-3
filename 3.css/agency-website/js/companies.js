const optionsT1 = { loop: true };
const pluginsT1 = [EmblaCarouselAutoplay({ delay: 2000, stopOnInteraction: false })];
const emblaNodeT1 = document.querySelector("#trusts-logos-1");
const emblaApiT1 = EmblaCarousel(emblaNodeT1, optionsT1, pluginsT1);

const pluginsT2 = [EmblaCarouselAutoplay({ delay: 2000, stopOnInteraction: false })];
const optionsT2 = { loop: true, direction: "rtl" };

const emblaNodeT2 = document.querySelector("#trusts-logos-2");
const emblaApiT2 = EmblaCarousel(emblaNodeT2, optionsT2, pluginsT2);
