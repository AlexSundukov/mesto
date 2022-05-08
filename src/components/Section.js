export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((items) => {
      this._renderer(items);
    });
  }
  addItem(item) {
    this._containerSelector.prepend(item);
  }
}