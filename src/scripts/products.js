export default function () {
  const buttonMore = document.getElementById("more-button");
  const arrivalsList = document.getElementById("arrivals-list");
  const container = document.getElementById("container");
  const loader = document.getElementById("loader");

  let clickButton = 0;

  buttonMore.addEventListener("click", addProductToDom);

  function addProductToDom() {
    showLoader();

    fetch("https://my-json-server.typicode.com/jubs16/Products/Products")
      .then((response) => response.json())
      .then((json) => {
        json.slice(0, 4).forEach((product) => {
          createProduct(product.name, product.price);
        });

        clickButton === 3 ? (buttonMore.style.display = "none") : "";

        hideLoader();
      });

    clickButton++;
  }

  function showLoader() {
    loader.style.display = "flex";
  }

  function hideLoader() {
    loader.style.display = "none";
  }

  function createProduct(nameProduct, priceProduct) {
    const divCard = document.createElement("div");
    divCard.classList.add("card");

    const divImage = document.createElement("div");
    divImage.classList.add("card__image");

    const divWrapper = document.createElement("div");
    divWrapper.classList.add("card__wrapper");

    const description = document.createElement("p");
    description.classList.add("card__description");
    description.innerText = nameProduct;

    const price = document.createElement("p");
    price.classList.add("card__price");
    price.innerText = priceProduct;

    const divSelect = document.createElement("div");
    divSelect.classList.add("card__select");

    const option = document.createElement("p");
    option.classList.add("card__select-option");
    option.innerText = "ADD TO CART";

    const icon = document.createElement("img");
    icon.classList.add("card__icon-select");
    icon.src = "./-e-kz-heart.svg";

    arrivalsList.appendChild(divCard);
    divCard.appendChild(divImage);
    divCard.appendChild(divWrapper);
    divWrapper.appendChild(description);
    divWrapper.appendChild(price);
    divCard.appendChild(divSelect);
    divSelect.appendChild(option);
    divSelect.appendChild(icon);
  }
}
