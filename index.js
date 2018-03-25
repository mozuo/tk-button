const tkbutton = require('./src/index.vue');


tkbutton.install = function(Vue) {
    Vue.component(tkbutton.name, tkbutton);
};

module.exports = tkbutton;