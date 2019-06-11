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
        context.commit('selectEventChoices', { ...payload, capComAvg: context.rootState.population.capComAvg, libConsAvg: context.rootState.population.libConsAvg });
    },
    primaryCandidates(context, payload) {
        context.commit('primaryCandidates', payload);
    },
};

export default actions;