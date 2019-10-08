//https://github.com/babel/babel/issues/8599

module.exports = {
    entry: './src/index.js',
    output:{
        path: __dirname+'/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /^.*\.(scss|css)/,
                loader: 'style-loader!css-loader!sass-loader'
            },
            {
                test: /^.*\.js/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {presets: ['env', 'stage-0']}
            }
        ]
    }
}