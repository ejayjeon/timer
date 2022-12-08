import { createStore } from 'vuex';
import { user } from './modules/user';
import { global } from './modules/global';

export default createStore({
  modules: {
    user,
    global,
  },
});
