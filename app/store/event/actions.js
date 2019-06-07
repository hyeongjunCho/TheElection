const actions = {
    initializeEventPool(context) {
        context.commit('initializeEventPool');
    },
    chooseNextEvent(context) {
        context.commit('chooseNextEvent');
    },
};

export default actions;