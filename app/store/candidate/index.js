import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state: {
        candidates: {
            // num: {
            //     party: 0,
            //     numOnParty: 0,
            //     capCom: 0,
            //     libCons: 0,
            //     traits: [],
            //     noAnswer: 0,
            //     active: true,
            // }
        },
        candidateTemplate: {
            party: 0,
            numOnParty: 0,
            capCom: 0,  // capitalist-communist value, -5 ~ +5
            libCons: 0, // liberal-conservative value, -5 ~ +5
            traits: [],
            noAnswer: 0,
        },
        activeCandidates: {
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
        },
        activeCandidatesList: [1,2,3,4,5,6,7,8,9,10,11,12],
        myCandidate: 1,
        currentParty: 0,
    },
    actions,
    mutations,
    getters
};