/* eslint-disable linebreak-style */

export default class Popover {
  constructor(element, tooltip) {
    this.element = document.querySelector(element);
    this.onSubmit = this.onSubmit.bind(this);
    this.btn = document.querySelector('.btn');
    this.element.addEventListener('submit', this.onSubmit);
    this.tooltip = tooltip;
  }

  onSubmit(e) {
    e.preventDefault();

    this.tooltip.addTooltip("And here's some amazing content. It's very engaging. Right", this.element);

    if (!this.tooltip) {
      this.btn.setCustomValidity("And here's some amazing content. It's very engaging. Right");
      this.element.reportValidity();
    }
  }
}
