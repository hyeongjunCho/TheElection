import traitsDict from '../../assets/traits.js';

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
    setPoliticalOrientation: function (state) {
        const { electorates } = state;
        let capComAvg = 0;
        let libConsAvg = 0;

        for (let i = 0; i < electorates.length; i++) {
            let capComMean = 0;
            let capComVar = 1;
            let libConsMean = 0;
            let libConsVar = 1;

            switch (electorates[i].age) {
                case 20:
                    capComMean += 0;
                    capComVar += 1;
                    libConsMean += 0.75;
                    libConsVar += 0.35;
                    break;

                case 30:
                    capComMean -= 0.55;
                    capComVar += 0.45;
                    libConsMean += 0.55;
                    libConsVar += 0.5;
                    break;
                
                case 40:
                    capComMean -= 0.75;
                    capComVar += 0.1;
                    libConsMean += 0;
                    libConsVar += 0.25;
                    break;

                case 50: 
                    capComMean += 0.5;
                    capComVar += 0;
                    libConsMean -= 0.25;
                    libConsVar += 0.5;
                    break;

                case 60: 
                    capComMean += 1;
                    capComVar += 0.625;
                    libConsMean -= 0.5;
                    libConsVar += 0.25;
                    break;
                
                case 70:
                    capComMean += 1.5;
                    capComVar += 0.25;
                    libConsMean -= 1;
                    libConsVar += 0.25;
                    break;
            }

            switch (electorates[i].region) {
                case 'Seoul':
                    capComMean += 0.5;
                    libConsMean += 0.25;
                    break;
                
                case 'Incheon':
                case 'Gyeonggi':
                case 'Gangwon':
                    capComMean -= 0.25;
                    libConsMean += 0.75;
                    break;
                
                case 'Daegu':
                case 'NorthGyeongSang':
                    capComMean += 1.25;
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
                    capComMean += 0.625;
                    libConsMean -= 0.75;
                    break;
                
                case 'NorthJeolla':
                case 'SouthJeolla':
                case 'Gwangju':
                case 'Jeju':
                    capComMean -= 1;
                    libConsMean += 0.25;
                    break;
            }

            switch (electorates[i].class) {
                case 0:
                    capComMean -= 0.35;
                    capComVar += 0.75;
                    libConsMean -= 0.5;
                    libConsVar += 0.25;
                    break;
                
                case 1:
                    capComMean += 0;
                    capComVar += 0;
                    libConsMean -= 0.1;
                    libConsVar += 0.5;
                    break;

                case 2:
                    capComMean += 0.75;
                    capComVar += 0.125;
                    libConsMean += 1.0;
                    libConsVar += 0.125;
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
            capComAvg += capCom;
            libConsAvg += libCons;
        }
        state.capComAvg = capComAvg / state.numOfElectorates;
        state.libConsAvg = libConsAvg / state.numOfElectorates;
    },
    initializeRating: function (state, payload) {
        const { electorates } = state;
        const { candidates } = payload;

        for (let i = 0; i < electorates.length; i++) {
            let minDistance = 1000;
            for (const key in candidates) {
                const candidate = candidates[key];
                let currentDistance = distance(electorates[i].capCom, electorates[i].libCons, candidate.capCom, candidate.libCons);
                electorates[i].goto[key] = 0;
                if (currentDistance <= minDistance && candidate) {
                    minDistance = currentDistance;
                    electorates[i].supportingCandidate = key;
                }
            }
            electorates[i].goto[electorates[i].supportingCandidate] = 1;
        }
    },
    primary: function (state) {
        const { ratings, electorates } = state;
        const activeCandidates = {
            1: true,
            2: true,
            3: true,
            4: true,
            5: true,
            6: true,
            7: true,
            8: true,
            9: true,
            10: true,
            11: true,
            12: true,
        }
        const activeCandidatesList = [];

        for (let i = 0; i < 4; i++) {
            if (ratings[3 * i + 1] > ratings[3 * i + 2]) {
                if (ratings[3 * i + 1] > ratings[3 * i + 3]) {
                    activeCandidates[3 * i + 2] = false;
                    activeCandidates[3 * i + 3] = false;
                } else {
                    activeCandidates[3 * i + 1] = false;
                    activeCandidates[3 * i + 2] = false;
                }
            } else {
                if (ratings[3 * i + 2] > ratings[3 * i + 3]) {
                    activeCandidates[3 * i + 1] = false;
                    activeCandidates[3 * i + 3] = false;
                } else {
                    activeCandidates[3 * i + 1] = false;
                    activeCandidates[3 * i + 2] = false;
                }
            }
        }

        for (let i = 1; i < 13; i++) {
            if (activeCandidates[i] === true) {
                activeCandidatesList.push[i];
            }
        }

        for (let i = 0; i < electorates.length; i++) {
            electorates.goto = {
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
            }
            let minimumDistance = 1000;
            let minimumDistanceCandidateKey = 0;
            for (let candidateKey of activeCandidatesList) {
                const currentCandidate = candidates[candidateKey];
                const currentDistance = distance(currentCandidate.capCom, currentCandidate.libCons, electorates[i].capCom, electorates[i].libCons);
                if (currentDistance < minimumDistance) {
                    minimumDistanceCandidateKey = candidateKey;
                    minimumDistance = currentDistance;
                }
            }
            electorates[i].supportingCandidate = minimumDistanceCandidateKey;
            electorates[i].goto[minimumDistanceCandidateKey] = 1;
        }

        return new Promise((resolve, reject) => {
            resolve({activeCandidates, activeCandidatesList});
        })
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
        const ratingsByRegion = {
        };
        for (let i = 0; i < state.regionBasicInfoes.length; i++) {
            ratingsByRegion[state.regionBasicInfoes[i].name] = JSON.parse(JSON.stringify(totalRatings));
        }
        for (let i = 0; i < state.electorates.length; i++) {
            ratingsByRegion[state.electorates[i].region][state.electorates[i].supportingCandidate]++;
            totalRatings[state.electorates[i].supportingCandidate]++;
        }
        for (let i = 0; i < state.regionBasicInfoes.length; i++) {
            for (let j = 1; j < 13; j++) {
                ratingsByRegion[state.regionBasicInfoes[i].name][j] /= state.regionBasicInfoes[i].num;
                state.regions[state.regionBasicInfoes[i].name].ratings = JSON.parse(JSON.stringify(ratingsByRegion[state.regionBasicInfoes[i].name]));
            }
        }
        for (let i = 1; i < 13; i++) {
            state.ratings[i] = totalRatings[i] / state.numOfElectorates;
        }
    },
    resetSupportingCandidate: function(state, payload) {
        const { electorates } = state;
        const { candidates, myCandidateKey, activeCandidatesList } = payload;
        const myCandidate = candidates[myCandidateKey];

        for (let i = 0; i < electorates.length; i++) {
            let newCandidateKey = randomlySet(electorates[i].goto);

            if (myCandidateKey && newCandidateKey) {
                for (let j = 0; j < myCandidate.traits.length; j++) {
                    const effect = traitsDict[myCandidate.traits[j].name].effect;
                    for (let e in effect) {
                        if (e === "correctionUp" && newCandidateKey !== myCandidateKey) {
                            const temp = {};
                            temp[newCandidateKey] = 1 - effect[e];
                            temp[myCandidateKey] = effect[e];
                            newCandidateKey = randomlySet(temp);
                        }
                        else if (e === "correctionDown" && newCandidateKey === myCandidateKey) {
                            let otherCandidateKey;
                            do {
                                otherCandidateKey = Math.ceil((1 - Math.random()) * 12);
                            } while (otherCandidateKey === myCandidateKey)
                            const temp = {};
                            temp[myCandidateKey] = 1 - effect[e];
                            temp[otherCandidateKey] = effect[e];
                            newCandidateKey = randomlySet(temp);
                        }
                        else if (e === "electorates") {
                            if (Math.random() <= effect[e].probability) {
                                electorates[i].capCom += effect[e].capCom;
                                electorates[i].libCons += effect[e].libCons;
                            }
                        }
                    }
                }
            }

            const newCandidate = candidates[newCandidateKey];
            const newDistance = distance(newCandidate.capCom, newCandidate.libCons, electorates[i].capCom, electorates[i].libCons);
            electorates[i].supportingCandidate = newCandidateKey;

            let outflow = 0;
            for (let j = 0; j < newCandidate.traits.length; j++){
                const effect = traitsDict[newCandidate.traits[j].name].effect;
                for (let e in effect) {
                    if (e === "outflow") {
                        outflow += effect[e] / (activeCandidatesList.length - 1);
                    }
                }
            }

            let aggregate = 0;
            for (let key of activeCandidatesList) {
                if (key === newCandidateKey)
                    continue;

                const currentCandidate = candidates[key];
                const currentDistance = distance(currentCandidate.capCom, currentCandidate.libCons, electorates[i].capCom, electorates[i].libCons);
                let probability = 0;
                
                let factor = 0.015;
                for (let j = 0; j < currentCandidate.traits.length; j++) {
                    const effect = traitsDict[currentCandidate.traits[j].name].effect;
                    for (let e in effect) {
                        if (e === "factor") {
                            factor += effect[e];
                        }
                    }
                }
                probability += (newDistance - currentDistance) * factor;

                if (probability <= 0.0001)
                    probability = 0.0001;

                for (let j = 0; j < currentCandidate.traits.length; j++) {
                    const effect = traitsDict[currentCandidate.traits[j].name].effect;
                    for (let e in effect) {
                        if (e === electorates[i].age ||
                            e === electorates[i].class ||
                            e === electorates[i].region ||
                            e === "inflow") {
                                probability += effect[e];
                            }
                    }
                }
                probability += outflow;

                electorates[i].goto[key] = probability;
                aggregate += probability;
            }
            electorates[i].goto[newCandidateKey] = 1 - aggregate; 
        }
    },
};

const randomlySet = function (probabilities) {
    let randomNum = 0;
    while (randomNum === 0) randomNum = Math.random();
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
    return Math.sqrt(Math.pow((a1 - b1), 2) + Math.pow((a2 - b2), 2));
};

export default mutations;