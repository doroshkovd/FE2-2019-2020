import { CONFIG } from "./config";
import { PageRender } from "./page-render";
import { Router } from "./router";
import { CheckboxService } from "./checkbox-service";

class App {
  constructor() {
    this.products = [];
    this.pageRender = new PageRender();
    this.router = new Router();
    this.checkboxService = new CheckboxService();
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
        this.initRouter();
        window.dispatchEvent(new HashChangeEvent('hashchange'));
      });
  }

  initRouter() {
    this.router.addRoute('', this.pageRender.renderHomePage.bind(this, this.products));
    this.router.addRoute('#products',
      this.pageRender.renderSingleProductPage.bind(this, this.products));
    this.router.addRoute('404', this.pageRender.renderErrorPage);
  }

  onFilterChange(data) {
    location.hash = data;
  }
}

const app = new App();