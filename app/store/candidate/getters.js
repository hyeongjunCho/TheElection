const getters = {
    getMyCandidate(state) {
        return state.candidates[state.myCandidate];
    },
    getMyTraits(state) {
        return state.candidates[state.myCandidate].traits;
    }
};

export default getters;