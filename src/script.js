import "./styles/style.scss";

import footerDate from "./scripts/footerDate";
import carousel from "./scripts/carousel";
import scroll from "./scripts/scroll";
import products from "./scripts/products";

window.addEventListener("DOMContentLoaded", () => {
  scroll();
  footerDate();
  products();
  carousel();
});
