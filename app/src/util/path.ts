export default {
    api: (() => ((process.env.NODE_ENV === 'production')
        ? 'http://localhost:5000'
        : 'http://localhost:5000'
    ))(),
};