const path = require("path");
const toml = require("toml");
const yaml = require("yamljs");
const json5 = require("json5");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"], // 加载css
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource", // 处理图片
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource", // 处理字体
      },
      {
        test: /\.(csv|tsv)$/i,
        use: ["csv-loader"], // 处理csv｜tsv文件
      },
      {
        test: /\.xml$/i,
        use: ["xml-loader"], // 处理xml文件
      },
      {
        test: /\.toml$/i,
        type: "json",
        parser: {
          parse: toml.parse, // 自定义解析器（parser） 替代特定的 webpack loader， 可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入
        },
      },
      {
        test: /\.yaml$/i,
        type: "json",
        parser: {
          parse: yaml.parse, // 自定义解析器（parser） 替代特定的 webpack loader， 可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入
        },
      },
      {
        test: /\.json5$/i,
        type: "json",
        parser: {
          parse: json5.parse, // 自定义解析器（parser） 替代特定的 webpack loader， 可以将任何 toml、yaml 或 json5 文件作为 JSON 模块导入
        },
      },
    ],
  },
};
