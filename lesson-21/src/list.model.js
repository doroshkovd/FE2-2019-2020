import { EventEmitter } from "./event-emitter";

export class ListModel extends EventEmitter {
  constructor(items) {
    super();
    this._items = items;
    this._selectedIndex = -1;
  }

  getItems() {
    return this._items;
  }

  addItem(item) {
    this._items.push(item);
    this.emit('itemAdded', item);
  }

  removeItem(index) {
    const item = this._items.splice(index, 1)[0];
    this.emit('itemRemoved', item);
    if (index === this._selectedIndex) {
      this._selectedIndex = -1;
    }
  }

  get selectedIndex() {
    return this._selectedIndex;
  }

  set selectedIndex(index) {
    const previosIndex = this._selectedIndex;
    this._selectedIndex = index;
  }
}