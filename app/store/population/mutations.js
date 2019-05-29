const mutations = {
    initializeRegions: function (state) {
        const { regionBasicInfoes, electorateTemplate, regions, ages, classes, electorates } = state;
        
        for (let age = 20; age <= 70; age += 10) {
            ages[age] = {
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
        }

        for (let c = 0; c < 3; c++) {
            classes[c] = {
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
        }

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
                electorate.supportingCandidate = randomlySet(state.ratings);
                electorate.age = randomlySet(regionBasicInfoes[i].age);
                electorate.class = randomlySet(regionBasicInfoes[i].class);
                electorate.politicaclEngagement = randomlySet({ 0: 0.25, 1: 0.25, 2: 0.25, 3: 0.25, 4: 0.25 });
                electorate.region = regionBasicInfoes[i].name;
                regions[electorate.region].electorates.push(electorate);
                ages[electorate.age].electorates.push(electorate);
                classes[electorate.class].electorates.push(electorate);
                electorates.push(electorate);
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

const randomlySet = function (probabilities) {
    const randomNum = Math.random();
    let agg = 0;
    let key;
    for (key in probabilities) {
        agg += probabilities[key];
        if (randomNum < agg)
            break;
    }
    return key
}

export default mutations;