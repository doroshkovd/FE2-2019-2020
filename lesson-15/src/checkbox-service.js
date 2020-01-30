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
    const target = event.target;
    const specName = target.getAttribute('name');

    if (target.checked) {
      if(!(this.filters[specName] && this.filters[specName].length)) {
        this.filters[specName] = [];
      }
      this.filters[specName].push(target.value);
    } else {
      if (this.filters[specName] && this.filters[specName].length &&
        this.filters[specName].includes(target.value)) {
        let index = this.filters[specName].indexOf(target.value);
        this.filters[specName].splice(index, 1);
      }

      if (!this.filters[specName].length) {
        delete this.filters[specName];
      }
    }

    this._observable.next(this.createQueryHash());
  }

  initialState() {
    if (location.hash.includes('#filter/')) {
      let filter = location.hash.split('#filter/')[1].trim();
      try {
        this.filters = JSON.parse(decodeURI(filter));
      } catch (e) {
        this.filters = {};
      }
    }
  }

  createQueryHash() {
    if (Object.keys(this.filters).length > 0) {
      return `#filter/${JSON.stringify(this.filters)}`;
    }

    return '#';
  }

  getCurrentState() {
    return this.createQueryHash();
  }

}