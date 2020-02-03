import { CONFIG } from "./config";

export class PageRender {
  constructor(checkboxService, router) {
    this.checkboxService = checkboxService;
    this.router = router;
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
        window.history.pushState(null, null, `/products/${index}`);
        this.router.render(decodeURI(location.pathname));
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
          history.pushState(null, null, this.checkboxService.getCurrentState());
          this.router.render(decodeURI(location.pathname));
        }
      }
    });
  }

  render404() {
    history.pushState(null, null, '/404');
    this.router.render(decodeURI(location.pathname));
  }

  renderSingleProductPage(products) {
    const page = document.querySelector(CONFIG.selectors.singlePage);
    const container = document.querySelector(CONFIG.selectors.singlePageContent);
    // const index = location.hash.split('#products/')[1].trim();
    const index = location.pathname.split('/products/')[1].trim();
    console.log(index);
    let isFind = false;
    if (products.length) {
      products.forEach((product) => {
        if (Number(product.id) === Number(index)) {
          isFind = true;
          container.querySelector('h3').innerText = product.name;
          container.querySelector('img').setAttribute('src', '/' + product.image.large);
          container.querySelector('p').innerText = product.description;
        }
      });
    }
    console.log(this);

    isFind ? page.classList.add(CONFIG.visible) : this.render404();
  }

  renderErrorPage() {
    const page = document.querySelector(CONFIG.selectors.errorPage);
    page.classList.add(CONFIG.visible);
  }

  filterResult(products, filter) {
    console.log(filter);
    const options = CONFIG.filterOptions;
    let productsCopy = [...products];
    let result = [];
    let isFiltered = false;
    this.clearCheckbox();

    options.forEach((option) => {
      if(filter[option] && filter[option].length) {
        if (isFiltered) {
          productsCopy = result;
          result = [];
        }
        console.log(option);
        filter[option].forEach((item) => {
          productsCopy.forEach((product) => {
            if (typeof product.specs[option] === 'number' &&
              product.specs[option] === Number(item)) {
              result.push(product);
              isFiltered = true;
            }

            if (typeof product.specs[option] === 'string' &&
              product.specs[option].toLowerCase().indexOf(item) !== -1) {
              result.push(product);
              isFiltered = true;
            }
          });
            [...document.querySelectorAll(`input[name=${option}]`)].filter((checkbox) => {
              return checkbox.value === item;
            })[0].checked = true;
        });
      }
    });
    return result;
  }

  renderFilterResult(products, filter)  {
    const result = this.filterResult(products, filter);
    this.renderHomePage(result);
  }

  clearCheckbox() {
    [...document.querySelectorAll(CONFIG.selectors.checkbox)].forEach((checkbox) => {
      checkbox.checked = false;
    });
  }

  initResetCheckbox() {
    document.querySelector('.filters button')
      .addEventListener('click', (event) => {
        event.preventDefault();
        this.clearCheckbox();
      });
  }
}