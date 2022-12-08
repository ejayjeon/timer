import VueSocketIO from 'vue-socket.io';
import SocketIO from 'socket.io-client';
import path from '@/util/path';
import store from '../store/index';

const connection = SocketIO(path.api, {
    transports: ['websocket'],
});
const socket = new VueSocketIO({
    debug: !(process.env.NODE_ENV === 'production'),
    connection,
    vuex: {
        store,
        actionPrefix: 'socket.',
        mutationPrefix: 'socket.',
    },
});

export default socket;