/* eslint-disable linebreak-style */
export default class Tooltip {
  constructor(parentEl) {
    this.parentEl = parentEl;
    this.tooltip = undefined;
    this.removeTooltip = this.removeTooltip.bind(this);
    this.targetElem = undefined;
  }

  addTooltip(message, targetElem) {
    const tooltip = document.createElement('div');
    tooltip.className = 'form-error';
    tooltip.innerHTML = `<h4>Popover title</h4> <div>${message}</div>`;
    this.tooltip = tooltip;
    this.parentEl.appendChild(tooltip);
    if (targetElem) {
      this.targetElem = this.parentEl.querySelector(targetElem);
      const coords = this.targetElem.getBoundingClientRect();
      this.tooltip.style.top = `${coords.top - tooltip.offsetHeight}px`;
      this.tooltip.style.left = `${coords.right - coords.width / 2 - tooltip.offsetWidth / 2}px`;
    }
    setTimeout(this.removeTooltip, 5000);
  }

  removeTooltip() {
    this.tooltip.remove();
  }
}
