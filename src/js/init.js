/* eslint-disable linebreak-style */
/* eslint-disable max-len */

import Tooltip from './tooltip';

export default class Init {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.tooltip = new Tooltip(this.parentEl);
    this.pressButton = this.pressButton.bind(this);
  }

  static get markup() {
    return `<form class="form">
      <input type="submit" class="btn" value = "Click to toggle popover">  
    </form> `;
  }

  static get submitSelector() { return '.btn'; }

  static get formSelector() { return '.form'; }

  bindToDOM() {
    this.parentEl.innerHTML = this.constructor.markup;
    const submit = this.parentEl.querySelector(this.constructor.submitSelector);
    submit.addEventListener('click', (evt) => this.pressButton(evt));
  }

  pressButton(evt) {
    evt.preventDefault();
    if (document.querySelector('.form-error')) { document.querySelector('.form-error').remove(); return; }
    this.tooltip.addTooltip("And here's some amazing content. It's very engaging. Right", this.constructor.formSelector);

    // if (!this.tooltip) {
    //   this.constructor.submitSelector.setCustomValidity("And here's some amazing content. It's very engaging. Right");
    //   this.constructor.formSelector.reportValidity();
    // }
  }
}
