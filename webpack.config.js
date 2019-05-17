const path = require('path');
const webpack = require('webpack');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
    target: 'node',
    entry: ['./index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [new webpack.HotModuleReplacementPlugin(),
        new CopyPlugin([
            { from: 'dir', to: "dir" },
            { from: 'symlink', to: "symlink", resolveLinks: false }
        ])
    ],
    node: {
        __dirname: true,
    }
};
module.exports = config;
