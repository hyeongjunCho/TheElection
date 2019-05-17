const getters = {
    getTotalRatings(state) {
        return state.ratings;
    },
    getRegionRatings: (state) => (regionName) => {
        return state.regions[regionName].ratings;
    }
};

export default getters;