import '../css/popover.css';

export default class Popover {
    constructor() {
      this._element = document.createElement('div');
      this._element.classList.add('popover');
      this._open = false;
    }

    togglePopover(title, message, element) {
        if(!this._open) {
          this._element.innerHTML = `<h3>${title}</h3><div>${message}</div>`;
          
          document.body.appendChild(this._element);
          const eRec = element.getBoundingClientRect();
          this._element.style.top = eRec.top - this._element.offsetHeight - 5 + 'px';
          this._element.style.left = eRec.left + element.offsetWidth / 2 - this._element.offsetWidth / 2 + 'px';
        }
        else {
          this._element.remove();
        }
        this._open = !this._open;
    }
}
