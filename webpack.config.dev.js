import path from "path";

export default {
  mode: "development",
  devtool: "eval-source-map",// different devtools, tradeoff speed for better source map for debugging
  entry: "./src/index.js",
  output: { // in development mode, no files are generated (in memory is faster)
    path: path.resolve(__dirname, "src"),
    publicPath: "/",
    filename: "bundle.js",
  },
  plugins: [],
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
    ],
  },
};
