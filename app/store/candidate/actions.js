const actions = {
    initializeCandidates(context) {
        context.commit('initializeCandidates');
    },
    setMyCandidate(context, payload) {
        context.commit('setMyCandidate', payload);
    },
    addTrait(context, payload) {
        context.commit('addTrait', payload);
    },
    countDownTraits(context) {
        context.commit('countDownTraits');
    },
    selectEventChoices(context, payload) {
        context.commit('selectEventChoices', payload);
    }
};

export default actions;