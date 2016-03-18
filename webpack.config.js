/**
 * Created by nana on 16/3/11.
 */
'use strict';
let entryFile = __dirname + '/public/js/entry';
let outPath = __dirname + '/public/out';
let outFilename = 'bundle.js';

module.exports = {
  entry : [entryFile],

  output : {
    path : outPath,
    publicPath : 'public',
    filename : outFilename
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        include: /public/,
        loader: "babel-loader"
      },
      {
        test : /\.css$/,
        include: /public/,
        loader: 'style-loader!css-loader'
      }
    ]
  }
};
