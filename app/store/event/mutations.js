import eventList from '../../assets/events.js';

const mutations = {
    initializeEventPool: function (state) {
        do {
            state.eventPool.push(...eventList);
        } while(state.eventPool.length < 52);
    },
    chooseNextEvent: function(state) {
        state.event = state.eventPool.shift();
    },
};

export default mutations;