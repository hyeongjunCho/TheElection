const mutations = {
    initializeCandidates: function (state) {
        const { candidates, candidateTemplate } = state;
        for (let i = 1; i < 13; i++) {
            const candidate = JSON.parse(JSON.stringify(candidateTemplate));
            candidate.capCom = randomValue();
            candidate.libCons = randomValue();
            candidates[i] = candidate;
        }
    },
};

const randomValue = function () {
    return Math.random() * 11 - 5;
};

export default mutations;