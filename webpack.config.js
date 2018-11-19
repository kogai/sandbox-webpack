module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader"]
      }
    ]
  },
  mode: "development",
  context: process.cwd(),
  entry: "./a",
  output: {
    filename: "[name].js"
  },
  devtool: "source-map",
  plugins: []
};
