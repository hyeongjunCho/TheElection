const getters = {
    getMyCandidate(state) {
        return state.candidates[state.myCandidate];
    },
    getMyTraits(state) {
        return state.candidates[state.myCandidate].traits;
    },
    isActiveMyCandidate(state) {
        return state.activeCandidates[state.myCandidate];
    },
    candidates(state) {
        return state.candidates;
    },
};

export default getters;