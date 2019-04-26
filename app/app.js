import Vue from "nativescript-vue";

import Home from "./pages/Home";

Vue.registerElement('SVGImage', () => require('nativescript-svg').SVGImage)
Vue.registerElement("FixedAbsoluteLayout", () => require("../fixAbsoluteLayout").AbsoluteLayout);
new Vue({

    template: `
        <Frame>
            <Home />
        </Frame>`,

    components: {
        Home
    }
}).$start();
