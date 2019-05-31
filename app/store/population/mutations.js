import candidate from "../candidate";

const mutations = {
    initializeElectorates: function (state) {
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
                // electorate.supportingCandidate = randomlySet(state.ratings);
                electorate.age = randomlySet(regionBasicInfoes[i].age);
                electorate.class = randomlySet(regionBasicInfoes[i].class);
                electorate.politicaclEngagement = randomlySet({ 0: 0.25, 1: 0.25, 2: 0.25, 3: 0.25, 4: 0.25 });
                electorate.region = regionBasicInfoes[i].name;
                // for (let k = 1; k < 13; k++) {
                //     if (k === electorate.supportingCandidate) {
                //         electorate.goto[k] = 1 - 0.03 * 11;
                //     } else {
                //         electorate.goto[k] = 0.03;
                //     }
                // }
                regions[electorate.region].electorates.push(electorate);
                ages[electorate.age].electorates.push(electorate);
                classes[electorate.class].electorates.push(electorate);
                electorates.push(electorate);
            }
        }
    },
    setPoliticalOrientation: function (state) {
        const { electorates } = state;

        for (let i = 0; i < electorates.length; i++) {
            let capComMean = 0;
            let capComVar = 1;
            let libConsMean = 0;
            let libConsVar = 1;

            switch (electorates[i].age) {
                case 20:
                    capComMean += 0;
                    capComVar += 1;
                    libConsMean += 1.125;
                    libConsVar += 0.5;
                    break;

                case 30:
                    capComMean -= 1.25;
                    capComVar += 0.75;
                    libConsMean += 0.75;
                    libConsVar += 0.75;
                    break;
                
                case 40:
                    capComMean -= 1.25;
                    capComVar += 0.25;
                    libConsMean += 0;
                    libConsVar += 0.25;
                    break;

                case 50: 
                    capComMean += 0.5;
                    capComVar += 0;
                    libConsMean += 0;
                    libConsVar += 0.5;
                    break;

                case 60: 
                    capComMean += 1.375;
                    capComVar += 0.625;
                    libConsMean -= 0.5;
                    libConsVar += 0.25;
                    break;
                
                case 70:
                    capComMean += 1.375;
                    capComVar += 0.25;
                    libConsMean -= 1;
                    libConsVar += 0.25;
                    break;
            }

            switch (electorates[i].region) {
                case 'Seoul':
                    capComMean += 0.75;
                    libConsMean += 0.5;
                    break;
                
                case 'Incheon':
                case 'Gyeonggi':
                case 'Gangwon':
                    capComMean += 0;
                    libConsMean += 0.75;
                    break;
                
                case 'Daegu':
                case 'NorthGyeongSang':
                    capComMean += 1.5;
                    libConsMean += 0.25;
                    break;

                case 'NorthChungcheong':
                case 'SouthChungcheong':
                case 'Daejeon':
                case 'Sejong':
                    capComMean += 0.25;
                    libConsMean -= 0.25;
                    break;
                
                case 'Busan':
                case 'Ulsan':
                case 'SouthGyeongSang':
                    capComMean -= 0.75;
                    libConsMean -= 0.5;
                    break;
                
                case 'NorthJeolla':
                case 'SouthJeolla':
                case 'Gwangju':
                case 'Jeju':
                    capComMean -= 2.0;
                    libConsMean += 0.25;
                    break;
            }

            switch (electorates[i].class) {
                case 0:
                    capComMean -= 0.25;
                    capComVar += 0.75;
                    libConsMean -= 0.5;
                    libConsVar += 0.25;
                    break;
                
                case 1:
                    capComMean += 0;
                    capComVar += 0;
                    libConsMean += 0;
                    libConsVar += 0.5;
                    break;

                case 2:
                    capComMean += 0.75;
                    capComVar += 0.125;
                    libConsMean += 1.0;
                    libConsVar += 0;
                    break;
            }

            let capCom = 0;
            let libCons = 0;
            do {
                capCom = normalRandom(capComMean, capComVar);
            } while (capCom <= -5 || capCom >= 5);
            do {
                libCons = normalRandom(libConsMean, libConsVar);
            } while (libCons <= -5 || libCons >= 5);

            electorates[i].capCom = capCom;
            electorates[i].libCons = libCons;
        }
    },
    initializeRating: function (state, payload) {
        const { electorates } = state;
        const { candidates } = payload;

        let minDistance = 1000;
        for (let i = 0; i < electorates.length; i++) {
            for (const key in candidates) {
                const candidate = candidates[key];
                let currentDistance = distance(electorates[i].capCom, electorates[i].libCons, candidate.capCom, candidate.libCons);
                electorates[i].goto[key] = 0.03;
                if (currentDistance <= minDistance) {
                    minDistance = currentDistance;
                    electorates[i].supportingCandidate = key;
                }
            }
            electorates[i].goto[electorates[i].supportingCandidate] = 1 - 0.03 * 11;
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
                region.ratings[j] = ratings[j] / state.regionBasicInfoes[i].num;
            }
        }
        for (let i = 1; i < 13; i++) {
            state.ratings[i] = totalRatings[i] / state.numOfElectorates;
        }
    },
    resetSupportingCandidate: function(state) {
        for (let i = 0; i < state.electorates.length; i++) {
            const randomNum = Math.random();
            
            
            let totalDistribution = 0;
            for (let j = 1; j < 13; j++) {
                totalDistribution += state.electorates[i].goto[j];
                if (randomNum < totalDistribution) {
                    if (j === state.electorates[i].supportingCandidate) {
                        break;
                    }
                    state.electorates[i].supportingCandidate = j;
                    for (let k = 1; k < 13; k++) {
                        state.electorates[i].goto[k] = state.ratings[k] * state.totalProbabilityGoto;
                    }
                    state.electorates[i].goto[j] = 1 - (1 - state.ratings[j]) * state.totalProbabilityGoto;
                    break;
                }
            }


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
};

const normalRandom = function (mean, variance) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    let value = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    value = value * variance + mean;
    return value;
};

const distance = function (a1, a2, b1, b2) {
    return Math.pow((a1 - b1), 2) + Math.pow((a2 - b2), 2);
}

export default mutations;