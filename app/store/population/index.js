import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state: {
        regions: {
            // name: {
            //     ratings: {
            //         1: 0,
            //         2: 0,
            //         3: 0,
            //         4: 0,
            //         5: 0,
            //         6: 0,
            //         7: 0,
            //         8: 0,
            //         9: 0,
            //         10: 0,
            //         11: 0,
            //         12: 0
            //     },
            //     electorates: [],
            // }
        },
        age: {
            // name: { // 20, 30, 40, 50, 60, >=70
            //     ratings: {
            //         1: 0,
            //         2: 0,
            //         3: 0,
            //         4: 0,
            //         5: 0,
            //         6: 0,
            //         7: 0,
            //         8: 0,
            //         9: 0,
            //         10: 0,
            //         11: 0,
            //         12: 0
            //     },
            //     electorates: [],
            // }
        },
        class: {
            // name: { // 0 ~ 2
            //     ratings: {
            //         1: 0,
            //         2: 0,
            //         3: 0,
            //         4: 0,
            //         5: 0,
            //         6: 0,
            //         7: 0,
            //         8: 0,
            //         9: 0,
            //         10: 0,
            //         11: 0,
            //         12: 0
            //     },
            //     electorates: [],
            // }
        },
        politicalEngagement: {
            // name: { // 0 ~ 4
            //     ratings: {
            //         1: 0,
            //         2: 0,
            //         3: 0,
            //         4: 0,
            //         5: 0,
            //         6: 0,
            //         7: 0,
            //         8: 0,
            //         9: 0,
            //         10: 0,
            //         11: 0,
            //         12: 0
            //     },
            //     electorates: [],
            // }
        },
        regionBasicInfoes: [
            { name: 'Busan', num: 3441 }
            , { name: 'Daegu', num: 2462 }
            , { name: 'Daejeon', num: 1490 }
            , { name: 'Gangwon', num: 1543 }
            , { name: 'Gwangju', num: 1459 }
            , { name: 'Gyeonggi', num: 13077 }
            , { name: 'Incheon', num: 2955 }
            , { name: 'Jeju', num: 667 }
            , { name: 'NorthChungcheong', num: 1599 }
            , { name: 'NorthGyeongsang', num: 2677 }
            , { name: 'NorthJeolla', num: 1837 }
            , { name: 'Sejong', num: 314 }
            , { name: 'Seoul', num: 9766 }
            , { name: 'SouthChungcheong', num: 2126 }
            , { name: 'SouthGyeongsang', num: 3374 }
            , { name: 'SouthJeolla', num: 1883 }
            , { name: 'Ulsan', num: 1156 }
        ],
        ageBasicInfoes: {
            20: 0.171,
            30: 0.169,
            40: 0.198,
            50: 0.201,
            60: 0.139,
            70: 0.122
        },
        electorates: [],
        electorateTemplate: {
            region: '',
            age: 0,
            class: 0, // 0 ~ 2
            politicalEngagement: 0, // 0 ~ 4
            supportingCandidate: 1,
            goto: {
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
                12: 0
            },
        },
        ratings: {
            1: 0.158,
            2: 0.158,
            3: 0.158,
            4: 0.130,
            5: 0.130,
            6: 0.130,
            7: 0.021,
            8: 0.021,
            9: 0.020,
            10: 0.025,
            11: 0.025,
            12: 0.024
        },
        numOfElectorates: 51826,
        totalProbabilityGoto: 0.01,
    },
    actions,
    mutations,
    getters
};