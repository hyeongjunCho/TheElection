const actions = {
    initializeEventPool(context) {
        context.commit('initializeEventPool');
    },
    selectEventChoices(context, payload) {
        context.commit('selectEventChoices', payload);
    },
    chooseNextEvent(context) {
        context.commit('chooseNextEvent');
    },
};

export default actions;