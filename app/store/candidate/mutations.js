import traitsDict from '../../assets/traits.js';

const mutations = {
    initializeCandidates: function (state) {
        const { candidates, candidateTemplate } = state;
        for (let i = 1; i < 13; i++) {
            const candidate = JSON.parse(JSON.stringify(candidateTemplate));
            candidate.party = Math.ceil(i / 3);
            candidate.numOnParty = Math.ceil(i % 3) || 3;
            switch (candidate.party) {
                case 1: // 더불어민주당
                    candidate.capCom = normalRandom(-0.5, 2);
                    candidate.libCons = normalRandom(0, 3);
                    break;
                
                case 2: // 자유한국당
                    candidate.capCom = normalRandom(+2, 1);
                    candidate.libCons = normalRandom(-1.5, 1.25);
                    break;
                
                case 3: // 바른미래당
                    candidate.capCom = normalRandom(+1.5, 1.25);
                    candidate.libCons = normalRandom(-0.25, 2);
                    break;
                
                case 4: // 정의당
                    candidate.capCom = normalRandom(-1.5, 1.5);
                    candidate.libCons = normalRandom(+2, 1.5);
                    break;
            }            
            candidates[i] = candidate;
        }
    },
    setMyCandidate: function (state, payload) {
        const myCandidate =  3 * payload.party - Math.floor(Math.random() * 3);
        state.myCandidate = myCandidate;
    },
    addTrait: function (state, payload) {
        const { candidates, myCandidate } = state;
        const myCandidateObject = candidates[myCandidate];
        if (payload.trait){
            const duration = traitsDict[payload.trait].duration || 1;
            myCandidateObject.traits.push({name: payload.trait, duration});
        }
    },
    countDownTraits: function (state) {
        const { candidates, myCandidate } = state;
        const myTraits = candidates[myCandidate].traits;
        for (let i = 0; i < myTraits.length; i++) {
            if (myTraits[i].duration > 0) {
                myTraits[i].duration -= 1;
            }
            if (myTraits[i].duration == 0) {
                myTraits.splice(i, 1);
                i -= 1;
            }
        }
    },
    selectEventChoices: function (state, payload) {
        const { event } = payload;
        let { index } = payload;
        const { candidates, myCandidate } = state;
        if (index === -1) {
            index = Math.ceil((1 - Math.random()) * event.choices.length);
            candidates[myCandidate].noAnswer++;
        }
        if (event.choices[index].effect.libCons) {
            candidates[myCandidate].libCons += event.choices[index].effect.libCons;
        } else if (event.choices[index].effect.capCom) {
            candidates[myCandidate].capCom += event.choices[index].effect.capCom;
        } else if (Object.keys(event.choices[index].effect).length) {
            const traitName = Object.keys(event.choices[index].effect)[0];
            const duration = traitsDict[traitName].duration;
            candidates[myCandidate].traits.push({ name: traitName, duration });
        }
    },
};

const normalRandom = function (mean, variance) {
    let u = 0, v = 0;
    while (u === 0) u = Math.random();
    while (v === 0) v = Math.random();
    let value = Math.sqrt(-2.0 * Math.log(u)) * Math.cos(2.0 * Math.PI * v);
    value = value * variance + mean;
    return value;
};

export default mutations;