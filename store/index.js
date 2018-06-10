import Vuex from 'vuex';
import Vue from 'vue';
// import { mutations } from './mutations'
// import { getters } from './getters'
// import * as actions from './actions'

// import * as types from './mutation-types.js'
// import { EventBus } from '~/utils/event-bus.js'
// import * as api from '~/firebase';
// import { findUserByOid, updateUserDoc } from '~/service/user'

// export const state = () => ({
//   uid: null,
//   // user: login(),
//   story: {},
//   pages: [],
//   widgets: []
// });
const dummyWidgets = [
  {
    name: 'Crypto',
    icon: 'trending_up',
    order: 4,
    type: 'service'
  },
  {
    name: 'SmartHome',
    icon: 'home',
    order: 5,
    type: 'smarthome'
  },
  {
    name: 'Pipeline',
    icon: 'playlist_play',
    order: 6,
    type: 'list'
  },
  {
    name: 'Poll',
    icon: 'poll',
    order: 7,
    type: 'service'
  },
  {
    name: 'Tasks',
    icon: 'done_all',
    order: 2,
    type: 'List',
    badgeIcon: 'notifications'
  },
  {
    name: 'Calendar',
    icon: 'calendar_today',
    order: 3,
    type: 'calendar',
    badge: 2
  },
  {
    name: 'Dashboard',
    icon: 'dashboard',
    order: 1,
    type: 'Dashboard'
  },
  {
    name: 'FoodPlan',
    icon: 'local_dining',
    order: 8,
    type: 'List'
  }
];

Vue.use(Vuex);
const createStore = () => {
  return new Vuex.Store({
    state: {
      authUser: null,
      widgets: []
    },
    mutations: {
      SET_WIDGETS: function (state, widgets) {
        state.widgets = widgets;
      }
    },
    actions: {
      async getWidgets ({ commit }) {
        try {
          const widgets = dummyWidgets.sort((a, b) => a.order - b.order);
          commit('SET_WIDGETS', widgets);
          return [];
        } catch (error) {
          throw error;
        }
      }
    }
  });
};

export default createStore;
