import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import contactModule from './contacts/contactModule';

export default createStore({
  modules: {
    contactModule
  },
  plugins: [createPersistedState()],
})
