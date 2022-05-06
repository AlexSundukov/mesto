export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderedItems = items;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
}

//добавление элемента в контайнер
addItem(element) {
    this._container.prepend(element);
}

//отрисовка элементов
renderItems() {
    this._renderedItems.forEach(item => {
        this._renderer(item);
    });
}
  /*
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
  }*/
}