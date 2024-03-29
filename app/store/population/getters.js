const getters = {
    getRegions(state) {
        return Object.keys(state.regions).length;
    },
    getTotalRatings(state) {
        return state.ratings;
    },
    getRegionRatings: (state, getters) => (regionName) => {
        if (getters.getRegions === 17) return state.regions[regionName].ratings;
        return {};
    },
    getSingleElectorate(state) {
        return state.electorates[0];
    },
};

export default getters;