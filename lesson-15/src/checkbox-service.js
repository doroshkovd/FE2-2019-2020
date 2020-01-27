import { CONFIG } from "./config";
import { Observable } from "./observable";

export class CheckboxService {
  constructor() {
    this._checkbox = document.querySelectorAll(CONFIG.selectors.checkbox);
    this._observable = new Observable();
    this.filters = {};
    this.initialState();
    this.init();
  }

  subscribe(fn) {
    this._observable.subscribe(fn);
  }

  init() {
    // const self = this;
    this._checkbox.forEach((item) => {
      item.addEventListener('click', this.onCheckboxClick.bind(this));
    });

    document.querySelector('.filters button')
      .addEventListener('click', (event) => {
        event.preventDefault();
        this.filters = {};
        this._observable.next('#');
      });
  }

  onCheckboxClick(event) {
    console.log(this.filters);
    console.log(this);
  }

  initialState() {
    if (location.hash.includes('#filters/')) {
      let filter = location.hash.split('#filters/')[1].trim();
      try {
        this.filters = JSON.parse(decodeURI(filter));
      } catch (e) {
        this.filters = {};
      }
    }
  }

}