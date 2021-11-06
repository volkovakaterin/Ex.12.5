/* eslint-disable linebreak-style */
/* eslint-disable quotes */

import Init from '../init';

describe('PressButton', () => {
  document.body.innerHTML = '<form id="container"></div>';
  const container = document.querySelector('#container');
  const init = new Init(container);
  init.bindToDOM();
  // const input = container.querySelector(Init.formSelector);
  const submit = container.querySelector(Init.submitSelector);
  test('pressButton', () => {
    // console.log(form);
    //   input.value = '30569309025904';
    submit.click();
    const tooltip = '<div class="form-error"><h4>Popover title</h4> <div>And here\'s some amazing content. It\'s very engaging. Right</div></div>';

    expect(container.querySelector('.form-error')).toBe(tooltip);
  });
});
