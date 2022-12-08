export const router = {
    namespaced: true,
    state: () => ({
        dlgStack: [],
        path: '',
        replacePath: '',
        route: null,
        initPath: '/',
    }),
    getters: {
        dlgStack(state: { dlgStack: []; }) {
            return state.dlgStack;
        },
        path(state: { path: any; }) {
            return state.path;
        },
        replacePath(state: { replacePath: any; }) {
            return state.replacePath;
        },
        route(state: { route: any; }) {
            return state.route;
        },
        initPath(state: { initPath: any; }) {
            return state.initPath;
        },
    },
    mutations: {
        push(state: { path: any; }, path: any) {
            state.path = path;
        },
        replace(state: { replacePath: any; }, path: any) {
            state.replacePath = path;
        },
        route(state: { route: any; }, path: any) {
            state.route = path;
        },
        initPath(state: { initPath: any; }, path: any) {
            state.initPath = path;
        },
    },
    actions: {
        showDlg({ state }: any, name: any) {
            return state.dlgStack.push(name) - 1;
        },
        closeDlg({ state }: any, name: any) {
            const idx = state.dlgStack.findIndex((item: any) => item === name);
            state.dlgStack.splice(idx, 1);
        },
        popDlg({ state }: any) {
            return state.dlgStack.pop();
        },
        cleanDlg({ state }: any) {
            state.dlgStack = [];
        },
    },
};