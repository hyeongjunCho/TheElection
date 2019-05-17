import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
    state: {
        regions: {
            // name: [
                // ratings: {
                //     1: 0,
                //     2: 0,
                //     3: 0,
                //     4: 0,
                //     5: 0,
                //     6: 0,
                //     7: 0,
                //     8: 0,
                //     9: 0,
                //     10: 0,
                //     11: 0,
                //     12: 0
                // },
                // electorates: [],
            // ]
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
            , { name: 'NorthJelloa', num: 1837 }
            , { name: 'Sejong', num: 314 }
            , { name: 'Seoul', num: 9766 }
            , { name: 'SouthChungcheong', num: 2126 }
            , { name: 'SouthGyeongsang', num: 3374 }
            , { name: 'SouthJeolla', num: 1883 }
            , { name: 'Ulsan', num: 1156 }
        ],
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
            1: 15.8,
            2: 15.8,
            3: 15.8,
            4: 13.0,
            5: 13.0,
            6: 13.0,
            7: 2.1,
            8: 2.1,
            9: 2.0,
            10: 2.5,
            11: 2.5,
            12: 2.4
        },
        numOfEletorates: 51826,
    },
    actions,
    mutations,
    getters
};