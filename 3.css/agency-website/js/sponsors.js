const options = { loop: true, direction: "rtl" };
const options2 = { loop: true };

const plugins = [EmblaCarouselAutoplay({ delay: 1000, stopOnInteraction: false })];
const emblaNode = document.querySelector("#banner-1");
const emplaApi = EmblaCarousel(emblaNode, options, plugins);

const emblaNode2 = document.querySelector("#banner-2");
const emplaApi2 = EmblaCarousel(emblaNode2, options2, plugins);
