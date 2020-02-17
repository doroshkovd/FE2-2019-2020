import { EventEmitter } from "./event-emitter";

export class ListView extends EventEmitter{
  constructor(model, elements) {
    super();
    this._model = model;
    this._elements = elements;
    model.on('itemAdded', () => this.rebuildList());
    model.on('itemRemoved', () => this.rebuildList());

    elements.list.addEventListener('change', e => {
      this.emit('listModified', e.target.selectedIndex);
    });

    elements.addButton.addEventListener('click', e => {
      this.emit('addButtonClick');
    });

    elements.delButton.addEventListener('click', e => {
      this.emit('delButtonClick');
    });
  }

  show() {
    this.rebuildList();
  }

  rebuildList() {
    const list = this._elements.list;
    list.options.length = 0;
    this._model.getItems()
      .forEach((item) => {
        list.options.add(new Option(item));
      });

    this._model.selectedIndex = -1;
  }
}