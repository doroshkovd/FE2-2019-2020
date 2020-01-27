import { CONFIG } from "./config";

export class PageRender {
  constructor() {
  }

  renderHomePage(products) {
    const page = document.querySelector(CONFIG.selectors.homePage);
    const allProducts = document.querySelectorAll(CONFIG.selectors.productsListItems);
    [...allProducts].forEach((product) => {
      product.classList.add(CONFIG.hidden);
    });

    [...allProducts].forEach((product) => {
      products.forEach((item) => {
        if (Number(product.dataset.index) === Number(item.id)) {
          product.classList.remove(CONFIG.hidden);
        }
      });
    });

    page.classList.add(CONFIG.visible);
  }

  generateAllProducts(data) {
    const list = document.querySelector(CONFIG.selectors.productsList);
    const templateScript = document.querySelector(CONFIG.selectors.productTemplate).innerHTML;

    //compile
    const template = Handlebars.compile(templateScript);
    list.innerHTML = template(data);

    list.querySelectorAll('li').forEach((li) => {
      li.addEventListener('click', (event) => {
        event.preventDefault();
        const index = li.dataset.index;
        location.hash = `#products/${index}`;
      });
    });
  }

  initSingleProductPage() {
    this.singleProductPage = document.querySelector(CONFIG.selectors.singlePage);
    this.singleProductPage.addEventListener('click', (event) => {
      event.preventDefault();
      if (this.singleProductPage.classList.contains(CONFIG.visible)) {
        const clicked = event.target;

        if (clicked.classList.contains('close') ||
        clicked.classList.contains('overlay')) {
          location.hash = '';
        }
      }
    });
  }

  renderSingleProductPage(products) {
    const page = document.querySelector(CONFIG.selectors.singlePage);
    const container = document.querySelector(CONFIG.selectors.singlePageContent);
    const index = location.hash.split('#products/')[1].trim();
    let isFind = false;
    if (products.length) {
      products.forEach((product) => {
        if (Number(product.id) === Number(index)) {
          isFind = true;
          container.querySelector('h3').innerText = product.name;
          container.querySelector('img').setAttribute('src', product.image.large);
          container.querySelector('p').innerText = product.description;
        }
      });
    }

    isFind ? page.classList.add(CONFIG.visible) : location.hash = '404';
  }

  renderErrorPage() {
    const page = document.querySelector(CONFIG.selectors.errorPage);
    page.classList.add(CONFIG.visible);
  }
}