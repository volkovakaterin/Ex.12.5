/* eslint-disable linebreak-style */
import Popover from './popover';
import Tooltip from './tooltip';

const popover = new Popover('.form', new Tooltip());

window.popover = popover;
