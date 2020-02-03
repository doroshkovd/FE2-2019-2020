import { CONFIG } from "./config";

export class RouterHistory {
  constructor() {
    this.routes = {
      '404': () => {
        console.log('Not found');
      },
    };
    this.mainContentPages = document.querySelectorAll(CONFIG.selectors.mainContentPages);

    // window.addEventListener('hashchange', () => {
    //   console.log(window.location.hash);
    //   this.render(decodeURI(window.location.hash));
    // });

    window.addEventListener('popstate', () => {
      this.render(decodeURI(window.location.pathname));
    });

  }

  addRoute(route, action) {
    this.routes[route] = action;
  }

  render(url) {
    console.log(url);
    let temp = url.split('/')[1];

    [...this.mainContentPages].forEach((page) => {
      page.classList.remove(CONFIG.visible);
    });

    this.routes[temp] ? this.routes[temp]() : this.routes['404']();
  }

}