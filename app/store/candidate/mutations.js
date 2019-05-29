const mutations = {
    initializeCandidates: function (state) {
        const { candidates, candidateTemplate } = state;
        for (let i = 1; i < 13; i++) {
            const candidate = JSON.parse(JSON.stringify(candidateTemplate));
            //
            // set status value
            //
            candidate.status.capitalist = Math.random() * 100;
            candidate.status.communitarian = Math.random() * 100;
            candidate.status.authoritative = Math.random() * 100;
            candidates[i] = candidate;
        }
    },
};

export default mutations;