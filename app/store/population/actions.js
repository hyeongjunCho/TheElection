const actions = {
    initializeElectorates(context) {
        context.commit('initializeElectorates');
    },
    setPoliticalOrientation(context) {
        context.commit('setPoliticalOrientation');
    },
    initializeRating(context) {
        context.commit('initializeRating', {candidates: context.rootState.candidate.candidates});
    },
    setRating(context) {
        context.commit('setRating');
    },
    resetSupportingCandidate(context) {
        context.commit('resetSupportingCandidate', {candidates: context.rootState.candidate.candidates});
    },
};

export default actions;