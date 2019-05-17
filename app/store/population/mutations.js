const mutations = {
    initializeRegions: function (state) {
        const { regionBasicInfoes, electorateTemplate, regions } = state;
        for (let i = 0; i < regionBasicInfoes.length; i++) {
            regions[regionBasicInfoes[i].name] = {
                ratings: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0,
                    11: 0,
                    12: 0
                },
                electorates: [],
            };
            for (let j = 0; j < regionBasicInfoes[i].num; j++) {
                const electorate = JSON.parse(JSON.stringify(electorateTemplate));
                electorate.supportingCandidate = Math.ceil(Math.random() * 12) || 1;
                regions[regionBasicInfoes[i].name].electorates.push(electorate);
            }
        }
    },
    setRating: function (state) {
        const totalRatings = {
            1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0
        };
        for (let i = 0; i < state.regionBasicInfoes.length; i++) {
            const region = state.regions[state.regionBasicInfoes.name];
            const ratings = {
                1: 0,
                2: 0,
                3: 0,
                4: 0,
                5: 0,
                6: 0,
                7: 0,
                8: 0,
                9: 0,
                10: 0,
                11: 0,
                12: 0
            };
            for (let j = 0; j < region.electorates.length; j++) {
                ratings[region.electorates.supportingCandidate]++;
            }
            for (let j = 1; j < 13; j++) {
                totalRatings[j] += ratings[j];
                region.ratings[j] = ratings[j] / state.regionBasicInfoes[i].num
            }
        }
        for (let j = 1; j < 13; j++) {
            state.ratings[j] = totalRatings[j] / state.numOfElectorates;
        }
    },
};

export default mutations;