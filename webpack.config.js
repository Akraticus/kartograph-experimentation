const CopyPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
        patterns:[
            // copy all except .js, .css files
            { 
              from: "**/*", 
              globOptions:{
                ignore:[
                  "**/*.js",
                  "**/*.css"
                ]
              },
              context: "src/"
            },  
        ]
    })
  ]
};