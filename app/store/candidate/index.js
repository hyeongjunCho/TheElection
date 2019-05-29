import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state: {
        candidates: {
            // num: {
            //     status: {
            //         capitalist: num,
            //         socialist: num,
            //         communitarian: num,
            //         liberalist: num,
            //         authoritative: num,
            //         democratic: num,
            //     },
            //     traits: [],
            // }
        },
        candidateTemplate: {
            status: {
                capitalist: 0,
                communitarian: 0,
                authoritative: 0,
            },
            traits: [],
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
    },
    actions,
    mutations,
    getters
};