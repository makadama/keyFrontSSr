const path = require('path');
const webConfig = require('./webConfig');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require("autoprefixer");
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    
    // Tell webpack the root file of our
    // server application 
    entry:'./src/client/client.js',

    // Tell webpack where to put the output file
    // that is generated
    output: {
        path: __dirname,
        filename: './public/client_bundle.js'
        
    },
    stats: {
    children: false
  },

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
                  publicPath: url => url.replace(/public/, "")
                }
            },

            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                  use: [
                    {
                      loader: "css-loader",
                      options: { importLoaders: 1 }
                    },
                    {
                      loader: "postcss-loader",
                      options: { 
                        ident: 'postcss',
                        plugins: [autoprefixer()] }
                    }
                  ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
          filename: "public/css/[name].css"
        })
  ]

};


