class EditableTable {
  constructor(table) {
    this.table = table;
    this.editingTd = null;
    this.init();
  }

  init() {
    this.table.addEventListener('click', (event) => {
      let target = event.target;
      while(target !== this.table) {
        if (target.className === 'edit-cancel') {
          this.endEdit(this.editingTd.elem, false);
          return false;
        }

        if (target.className === 'edit-ok') {
          this.endEdit(this.editingTd.elem, true);
          return false;
        }

        if (target.nodeName === 'TD' && !this.editingTd) {
          this.makeTdEditable(target);
        }

        target = target.parentNode;
      }
    });
  }

  makeTdEditable(td) {
    this.editingTd = {
      elem: td,
      data: td.innerHTML,
    };

    td.classList.add('edit-td');
    const textarea = document.createElement('textarea');
    textarea.style.width = td.clientWidth + 'px';
    textarea.style.height = td.clientHeight + 'px';
    textarea.className = 'edit-area';

    textarea.value = td.innerHTML;
    td.innerHTML = '';
    td.appendChild(textarea);
    textarea.focus();

    td.insertAdjacentHTML('beforeEnd', `
        <div class="edit-controls">
            <button class="edit-ok">OK</button>
            <button class="edit-cancel">Cancel</button>
        </div>`);
  }
  endEdit(td, flag) {
    flag ? (td.innerHTML = td.firstChild.value) : (td.innerHTML = this.editingTd.data);
    td.classList.remove('edit-td');
    this.editingTd = null;
  }
}

const item = new EditableTable(document.getElementById('bagua-table'));