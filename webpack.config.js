const path = require("path");

module.exports = {
  entry: "./client/src/index.jsx",
  output: {
    path: path.resolve(__dirname, "client/public/"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.m?js|jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[contenthash].[ext]',
              outputPath: 'static/img',
              esModule: false // <- here
            }
          }
        ]
      }
    ],
  },
  mode: "development",
};
