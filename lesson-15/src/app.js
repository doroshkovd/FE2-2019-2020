import { CONFIG } from "./config";
import { PageRender } from "./page-render";
import { Router } from "./router";
import { CheckboxService } from "./checkbox-service";

class App {
  constructor() {
    this.products = [];
    this.router = new Router();
    this.checkboxService = new CheckboxService();
    this.pageRender = new PageRender(this.checkboxService);
    this.checkboxService.subscribe(this.onFilterChange);
    this.init();
  }

  init() {
    fetch(`${CONFIG.api}/products`, {
      headers: {
        'Content-Type': 'application/json',
      }
    })
      .then((res) => res.json())
      .then((data) => {
        this.products = data;
        this.pageRender.generateAllProducts(data);
        this.pageRender.initSingleProductPage();
        this.pageRender.initResetCheckbox();
        this.initRouter();
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      });
  }

  initRouter() {
    this.router.addRoute('', this.pageRender.renderHomePage.bind(this.pageRender, this.products));
    this.router.addRoute('#products',
      this.pageRender.renderSingleProductPage.bind(this, this.products));
    this.router.addRoute('404', this.pageRender.renderErrorPage);
    this.router.addRoute('#filter', this.pageRender.renderFilterResult.bind(this.pageRender, this.products, this.checkboxService.filters));
  }

  onFilterChange(data) {
    location.hash = data;
  }
}

const app = new App();
