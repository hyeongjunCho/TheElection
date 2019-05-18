const getters = {
    getRegions(state) {
        return Object.keys(state.regions).length;
    },
    getTotalRatings(state) {
        return state.ratings;
    },
    getRegionRatings: (state) => (regionName) => {
        return state.regions[regionName].ratings;
    },
};

export default getters;