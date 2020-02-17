export class ListController {
  constructor(model, view) {
    this._model = model;
    this._view = view;

    view.on('listModified', idx => this.updatedSelected(idx));
    view.on('addButtonClick', () => this.addItem());
    view.on('delButtonClick', () => this.delItem());
    view.show();
  }

  updatedSelected(index) {
    this._model.selectedIndex = index;
  }

  addItem() {
    const item = window.prompt('Add Item', '');
    if (item) {
      this._model.addItem(item);
    }
  }

  delItem() {
    const index = this._model.selectedIndex;
    if (index !== -1) {
      this._model.removeItem(index);
    }
  }
}