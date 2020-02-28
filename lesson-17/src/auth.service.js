import { CONFIG } from "./config";

export class AuthService {
  constructor(router) {
    this.btn = document.getElementById('login-btn');
    this.init();
    this.router = router;
  }

  init() {
    this.btn.addEventListener('click', (event) => {
      event.preventDefault();
      this.auth();
    });
  }

  auth() {
    const userName = document.getElementById('login-name').value;
    const userPsw = document.getElementById('login-psw').value;

    if (userName.trim() && userPsw.trim()) {
      fetch(`${CONFIG.api}/users`)
        .then((res) => res.json())
        .then((res) => {
          res = res.filter((item) => item.login === userName && String(item.psw) === userPsw);

          if(res.length === 1) {
            sessionStorage.setItem('login', true);
            history.pushState(null, null, '/');
            this.router.render(decodeURI(location.pathname));
          }
        });
    }
  }
}
