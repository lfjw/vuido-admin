import libui from 'libui-node'
import Vue from 'vuido'

import layout from './view/layout'

const window = new Vue({
  render: h => h(layout)
});

window.$mount();

libui.startLoop();
