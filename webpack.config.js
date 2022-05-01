const path = require('path')

module.exports = {
    mode: 'development',
    entry: '/cadastro/cd.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    watch: true
}