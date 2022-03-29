export default class Section {
  constructor({items, renderer}, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerSelector = document.querySelector(containerSelector);
  }
  renderElements() {
    this._items.forEach((element) => {
      this._renderer(element);
    });
  }
  addItem(item) {
    this._containerSelector.prepend(item);
  }
}