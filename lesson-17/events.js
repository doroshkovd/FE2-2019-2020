const select = document.body.children[1];
//
// let selectedOption = select.options[select.selectedIndex];
//
// select.addEventListener('change', () => {
//   console.log(select.options[select.selectedIndex]);
// });
//
// console.log(selectedOption);
//
// [
//   {value: 1, name: 'Name 1'},
//   {value: 2, name: 'Name 2'},
//   {value: 3, name: 'Name 3'},
//   {value: 4, name: 'Name 4'},
// ].forEach((obj) => {
//   const newOption = new Option(obj.name, obj.value);
//   select.append(newOption);
// });
//
// setTimeout(() => {
//   select.focus();
// }, 2000);
//
// setTimeout(() => {
//   select.blur();
// }, 4000);

class CustomPlaceholder {

  constructor(query) {
    this.input = document.querySelector(query);
    this.placeholder = this.input.dataset['placeholder'];
    this.showPlaceholder();
    this.init();
  }

  showPlaceholder() {
    this.input.classList.add('placeholder');
    this.input.value = this.placeholder;
  }

  showTooltip() {
    const tooltip = document.createElement('span');
    tooltip.innerHTML = this.placeholder;
    tooltip.className = 'placeholder-tooltip';
    tooltip.style.fontSize = getComputedStyle(this.input).fontSize;
    tooltip.style.left = this.input.getBoundingClientRect().left + 'px';
    tooltip.style.top = this.input.getBoundingClientRect().top - 19 -
      tooltip.offsetHeight + 'px';
    document.body.append(tooltip);
    this.input.tooltip = tooltip;
  }

  init() {
    this.input.onfocus = () => {
      if (this.input.classList.contains('placeholder')) {
        this.input.classList.remove('placeholder');
        this.input.value = '';
      }

      this.showTooltip();
    };

    this.input.onblur = () => {
      this.input.tooltip.remove();
      if (this.input.value === '') {
        this.input.value = this.placeholder;
        this.input.classList.add('placeholder');
      }
    };
  }
}

// const placeholder = new CustomPlaceholder('[data-placeholder]');


class DivEditor {
  constructor(div) {
    this.div = div;
    this.buffer = div.innerHTML;
    this.textarea = null;
    this.init();
  }

  init() {
    window.addEventListener('keydown', (event) => {
      if(event.ctrlKey && event.keyCode === 69) {
        event.preventDefault();
        this.edit()
      }

      if(event.ctrlKey && event.keyCode === 83) {
        event.preventDefault();
        this.save()
      }

      if (event.keyCode === 27) {
        event.preventDefault();
        this.revert();
      }

    });
  }

  edit() {
    if (!this.textarea) {
      this.buffer = this.div.innerHTML;
      this.textarea = document.createElement('textarea');
      this.textarea.value = this.buffer;
      this.div.innerHTML = '';
      this.div.append(this.textarea);
    }
  }

  save() {
    if (!!this.textarea) {
      this.buffer = this.textarea.value;
      this.div.innerHTML = this.buffer;
      this.textarea = null;
    }
  }

  revert() {
    this.div.innerHTML = this.buffer;
    this.textarea = null;
  }
}

const editDiv = new DivEditor(document.getElementById('text'));

