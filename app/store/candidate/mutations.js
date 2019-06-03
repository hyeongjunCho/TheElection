import traitsDict from '../../assets/traits.js';

const mutations = {
    initializeCandidates: function (state) {
        const { candidates, candidateTemplate } = state;
        for (let i = 1; i < 13; i++) {
            const candidate = JSON.parse(JSON.stringify(candidateTemplate));
            candidate.party = Math.ceil(i / 3);
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
                    candidate.libCons = normalRandom(+2, 2);
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
        myCandidateObject.traits.push(payload.trait);
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