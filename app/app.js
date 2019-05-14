import Vue from "nativescript-vue";
import store from "./store";

import Home from "./pages/Home";

Vue.registerElement("FixedAbsoluteLayout", () => require("../fixAbsoluteLayout").AbsoluteLayout);
Vue.use(store);
new Vue({
    template: `
        <Frame>
            <Home />
        </Frame>`,
    store,
    components: {
        Home
    }
}).$start();
