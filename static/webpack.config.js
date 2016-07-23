
var path = require("path");
var webpack = require("webpack");

module.exports = {
    cache:true,
    entry: {
        clock: ["./src/clock/clock.jsx"]
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].bundle.js"
    },
    resolve: {
        modulesDirectories: ["node_modules", "common"],
        extensions: ["", ".js", ".jsx"]
    },
    module: {
        loaders: [
            // required for react jsx
            {
                test: /\.js$/,
                loaders: ['babel'],
                exclude: /(node_modules)/,
                cacheDirectory: true
            },
            {
                test: /\.jsx$/,
                loaders: ['babel'],
                exclude: /(node_modules)/,
                cacheDirectory: true
            }
        ]
    }
};