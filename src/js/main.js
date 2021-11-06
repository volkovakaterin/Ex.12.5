/* eslint-disable linebreak-style */

import Init from './init';

document.body.innerHTML = '<div id="container"></div>';
const container = document.querySelector('#container');
const init = new Init(container);
init.bindToDOM();

// const pressButton = new PressButton('.form', new Tooltip());

// window.pressButton = pressButton;
