const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

console.log([tabs[0]]);

const tabActive = $(".container .tab-item");
const line = $(".container .line");

line.style.width = tabActive.offsetWidth + "px";
line.style.left = tabActive.offsetLeft + "px";

tabs.forEach((tab, indexTab) => {
  tab.onclick = function () {
    const pane = panes[indexTab];
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    line.style.width = tab.offsetWidth + "px";
    line.style.left = tab.offsetLeft + "px";

    this.classList.add("active");
    pane.classList.add("active");
  }
});