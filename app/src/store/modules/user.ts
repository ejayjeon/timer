export const user = {
    namespaced: true,
    state: () => ({
        loading: false,
    }),
    getters: {
        loading(state: { loading: any; }) {
            return state.loading;
        },
    },
    mutations: {
        loading(state: { loading: any; }, value: any) {
            state.loading = value;
        },
    },
    actions: {
        loading({ commit }: any, payload: boolean) {
            commit('loading', payload);
        },
    },
};