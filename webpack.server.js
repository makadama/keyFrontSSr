const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: webConfig.environment,
    // Inform webpack that we're building a bundle
    // for nodeJS, rather then for the browser
    target: 'node',

    // Tell webpack the root file of our
    // server application 
    entry: './src/index.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        path: __dirname,
        filename: './build/bundle.js',
        libraryTarget: "commonjs2"
    },
    devtool: "cheap-module-source-map",
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: 'babel-loader',
                exclude: '/node_modules/',
                options: {
                    presets: [
                        'react', 'stage-0', ['env', {
                            target: { browsers: ['last 2 versions']}
                        }]
                    ]
                } 
            },
            {
                test: [/\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
                loader: "file-loader",
                options: {
                  name: "public/media/[name].[ext]",
                  publicPath: url => url.replace(/public/, ""),
                  emit: false
                }
            },
            {
                test: /\.css$/,
                use: [
                  {
                    loader: "css-loader/locals"
                  }
                ]
            },
        ]
    },
    
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/client/assets/email_templates', to:  'public/media/email_templates' }
        ])
  ],
    // Tell webpack not to bundle any libraries that exist in the 'node_modules' folder
    // into the server bundle
    externals: [webpackNodeExternals()]

};