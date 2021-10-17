/* eslint-disable linebreak-style */
export default class Tooltip {
  constructor() {
    this.tooltip = 0;
    this.removeTooltip = this.removeTooltip.bind(this);
  }

  addTooltip(message, targetElem) {
    const tooltip = document.createElement('div');
    tooltip.className = 'form-error';
    tooltip.innerHTML = `<h4>Popover title</h4> <div>${message}</div>`;
    this.tooltip = tooltip;
    document.body.appendChild(tooltip);
    if (targetElem) {
      const coords = targetElem.getBoundingClientRect();
      tooltip.style.top = `${coords.top - tooltip.offsetHeight}px`;
      tooltip.style.left = `${coords.right - coords.width / 2 - tooltip.offsetWidth / 2}px`;
    }
    setTimeout(this.removeTooltip, 2000);
  }

  removeTooltip() {
    this.tooltip.remove();
  }
}
