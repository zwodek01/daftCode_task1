export default function () {
  const buttonScroll = document.getElementById("scroll");

  window.addEventListener("scroll", toggleScrollButton);

  buttonScroll.addEventListener("click", scrollToUp);

  function toggleScrollButton() {
    const currentHeight = window.innerHeight;
    const currentScrollY = window.scrollY;

    currentScrollY > currentHeight / 2
      ? buttonScroll.classList.add("hero-section__button--show-button")
      : buttonScroll.classList.remove("hero-section__button--show-button");
  }

  function scrollToUp() {
    window.scrollTo(0, 0);
  }
}
