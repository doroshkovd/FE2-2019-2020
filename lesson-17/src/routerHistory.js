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

  isAuth() {
    return sessionStorage.getItem('login');
  }

  render(url) {
    if (this.isAuth()) {
      console.log(url);
      let temp = url.split('/')[1];

      [...this.mainContentPages].forEach((page) => {
        page.classList.remove(CONFIG.visible);
      });
      if (temp === 'login') {
        temp = '';
        history.pushState(null, null, '/');
      }
      this.routes[temp] ? this.routes[temp]() : this.routes['404']();
    } else {
      history.pushState(null, null, '/login');
      this.routes['login']();
    }

  }

}