const burger = document.querySelector(".burger");
const nav = document.querySelector(".global-nav-lists");
const navLinks = document.querySelectorAll(".global-nav-lists li");




burger.addEventListener("click", () => {
  //console.log("click");
  //console.log(navLinks.classList);
  nav.classList.toggle("nav-active");

  navLinks.forEach((link, index) => {
    if (link.style.animation) {
      link.style.animation = "";
    } else {
      // console.log(index);
      link.style.animation = `navLinksFade 0.5s ease forwards ${
        index / 7 + 0.4
      }s`;
    }
  });
  //burger animataion
  burger.classList.toggle("toggle");
});


/*toggle（）はクラス名をつけたり消したりする関数 */
/*console.log(navlinks);をするとディベロッパーツールで要素が
取得できているか確認できる。 */


