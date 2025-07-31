const tabsContainers = document.querySelectorAll("[data-tab-container]");

tabsContainers.forEach((container) => {
    const tabs = container.querySelectorAll(".tabs .tab");
    tabs.forEach((tab) => {
        tab.onclick = function () {
            console.log("clicked");
            const tabAttr = tab.getAttribute("data-tab");
            container.querySelectorAll(".tab-pane").forEach((pane) => {
                pane.classList.remove("active");
            });
            tabs.forEach((t) => {
                t.classList.remove("tab-active");
            });
            tab.classList.add("tab-active");
            container
                .querySelector(`.tab-pane[data-tab-pane="${tabAttr}"]`)
                ?.classList.add("active");
        };
    });
});
