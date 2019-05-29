const mutations = {
    initializeCandidates: function (state) {
        const { candidates, candidateTemplate } = state;
        for (let i = 1; i < 13; i++) {
            const candidate = JSON.parse(JSON.stringify(candidateTemplate));
            //
            // set status value
            //
            candidates[i] = candidate;
        }
    },
};

export default mutations;