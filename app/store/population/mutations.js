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
                    12: 0,
                },
                electorates: [],
            };
            for (let j = 0; j < regionBasicInfoes[i].num; j++) {
                const electorate = JSON.parse(JSON.stringify(electorateTemplate));
                const randomNum = Math.random();
                if (randomNum < 0.158) {
                    electorate.supportingCandidate = 1;
                } else if (randomNum < 0.316) {
                    electorate.supportingCandidate = 2;
                } else if (randomNum < 0.474) {
                    electorate.supportingCandidate = 3;
                } else if (randomNum < 0.604) {
                    electorate.supportingCandidate = 4;
                } else if (randomNum < 0.734) {
                    electorate.supportingCandidate = 5;
                } else if (randomNum < 0.864) {
                    electorate.supportingCandidate = 6;
                } else if (randomNum < 0.885) {
                    electorate.supportingCandidate = 7;
                } else if (randomNum < 0.906) {
                    electorate.supportingCandidate = 8;
                } else if (randomNum < 0.926) {
                    electorate.supportingCandidate = 9;
                } else if (randomNum < 0.951) {
                    electorate.supportingCandidate = 10;
                } else if (randomNum < 0.976) {
                    electorate.supportingCandidate = 11;
                } else if (randomNum < 1) {
                    electorate.supportingCandidate = 12;
                }
                electorate.region = regionBasicInfoes[i].name;
                regions[regionBasicInfoes[i].name].electorates.push(electorate);
                state.electorates.push(electorate);
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
            12: 0,
        };
        for (let i = 0; i < state.regionBasicInfoes.length; i++) {
            const region = state.regions[state.regionBasicInfoes[i].name];
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
                12: 0,
            };
            for (let j = 0; j < region.electorates.length; j++) {
                ratings[region.electorates[j].supportingCandidate]++;
            }
            for (let j = 1; j < 13; j++) {
                totalRatings[j] += ratings[j];
                region.ratings[j] = ratings[j] / state.regionBasicInfoes[i].num
            }
        }
        for (let i = 1; i < 13; i++) {
            state.ratings[i] = totalRatings[i] / state.numOfElectorates;
        }
    },
};

export default mutations;