import Vue from "nativescript-vue";
import Vuex from "vuex";
import Event from "./event";
import Population from "./population";
import Candidate from "./candidate";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        event: Event,
        population: Population,
        candidate: Candidate,
    }
});