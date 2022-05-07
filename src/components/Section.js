export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }
  renderItems() {
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }
  addItem(item) {
      this._container.prepend(item);
  }
}