const actions = {
    initializeRegions(context) {
        context.commit('initializeRegions');
    },
    setRating(context) {
        context.commit('setRating');
    },
    resetSupportingCandidate(context) {
        context.commit('resetSupportingCandidate');
    },
};

export default actions;