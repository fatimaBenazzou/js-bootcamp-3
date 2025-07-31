const observer = new IntersectionObserver(
    (entries) => {
        for (const entry of entries) {
            if (entry.isIntersecting) {
                entry.target.setAttribute("visible", "true");
            } else {
                entry.target.removeAttribute("visible");
            }
        }
    },
    {
        threshold: 0.1,
    }
);

document.querySelectorAll("[data-observe-me]").forEach((el) => observer.observe(el));
