let imgItems = [...document.querySelectorAll(".p-speed__img-wrap")];
let titles = [...document.querySelectorAll(".p-speed__section--title")];
let mainTitle = document.querySelector(".p-speed__mainTitle");
let titleMessage = document.querySelector(".p-speed__title");

//監視対象になった瞬間、activeを付加する関数
let setItemActive = (entries) => {
    //console.log(entries);
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add("active");
        } else {
            entry.target.classList.remove("active");
        }
    });
};

let options = {
    rootMargin: "0px",
    //閾値
    threshold: 0.5,
};

//どこにいるのか監視する。そして、特定の位置に来たら、関数を呼ぶ。
let observer = new IntersectionObserver(setItemActive, options);
observer.observe(mainTitle);

//img-wrapは偶数と奇数で出現する場所が違う
imgItems.map((item, index) => {
    console.log(item, index);
    item.children[0].style.backgroundImage = `url(../assets/img/card-0${index + 1}.jpeg)`;
    index % 2 == 0 ? (item.style.left = "55%") : (item.style.left = "5%");
    observer.observe(item);
});

titles.map((title, index) => {
    index % 2 == 0 ? (title.style.left = "45%") : (title.style.left="35%");
    observer.observe(title);
})