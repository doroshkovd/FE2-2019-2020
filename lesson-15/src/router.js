import { CONFIG } from "./config";

export class Router {
  constructor() {
    this.routes = {
      '404': () => {
        console.log('Not found');
      },
    };
    this.mainContentPages = document.querySelectorAll(CONFIG.selectors.mainContentPages);
    console.log('constructor', this.mainContentPages);
    window.addEventListener('hashchange', () => {
      console.log(window.location.hash);
      this.render(decodeURI(window.location.hash));
    });
  }

  addRoute(route, action) {
    this.routes[route] = action;
  }

  render(url) {
    let temp = url.split('/')[0];
    [...this.mainContentPages].forEach((page) => {
      page.classList.remove(CONFIG.visible);
    });

    this.routes[temp] ? this.routes[temp]() : this.routes['404']();
  }

}