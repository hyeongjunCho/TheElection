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
    }
};

export default actions;