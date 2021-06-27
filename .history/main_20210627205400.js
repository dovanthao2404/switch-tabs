const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

console.log([tabs[0]]);

const tabActive = $(".container .tab-item");
const line = $(".container .line");

tabs.forEach((tab, indexTab) => {
  tab.onclick = function () {
    const pane = panes[indexTab];
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");


    this.classList.add("active");
    pane.classList.add("active");
  }
});