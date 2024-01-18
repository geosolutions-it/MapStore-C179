const path = require("path");

const extractThemesPlugin = require('./MapStore2/build/themes.js').extractThemesPlugin;
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('./MapStore2/build/moduleFederation.js').plugin;

const paths = {
    base: __dirname,
    dist: path.join(__dirname, "dist"),
    framework: path.join(__dirname, "MapStore2", "web", "client"),
    code: [path.join(__dirname, "js"), path.join(__dirname, "MapStore2", "web", "client")]
};

const cfg = require('./MapStore2/build/buildConfig')(
    {
        'MapStore-C179': path.join(__dirname, "js", "app"),
        'MapStore-C179-embedded': path.join(__dirname, "js", "embedded"),
        'MapStore-C179-api': path.join(__dirname, "MapStore2", "web", "client", "product", "api"),
        'geostory-embedded': path.join(__dirname, "js", "geostoryEmbedded"),
        "dashboard-embedded": path.join(__dirname, "js", "dashboardEmbedded")
    },
    {
        "themes/default": path.join(__dirname, "themes", "theme.less")
    },
    paths,
    [extractThemesPlugin, ModuleFederationPlugin],
    true,
    undefined,
    '.MapStore-C179',
    [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'indexTemplate.html'),
            publicPath: 'dist/',
            chunks: ['MapStore-C179'],
            inject: true,
            hash: true
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'embeddedTemplate.html'),
            publicPath: 'dist/',
            chunks: ['MapStore-C179-embedded'],
            inject: true,
            hash: true,
            filename: 'embedded.html'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'apiTemplate.html'),
            publicPath: 'dist/',
            chunks: ['MapStore-C179-api'],
            inject: 'body',
            hash: true,
            filename: 'api.html'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'geostory-embedded-template.html'),
            chunks: ['geostory-embedded'],
            publicPath: 'dist/',
            inject: "body",
            hash: true,
            filename: 'geostory-embedded.html'
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'dashboard-embedded-template.html'),
            chunks: ['dashboard-embedded'],
            publicPath: 'dist/',
            inject: 'body',
            hash: true,
            filename: 'dashboard-embedded.html'
        })
    ],
    {
        "@mapstore/patcher": path.resolve(__dirname, "node_modules", "@mapstore", "patcher"),
        "@mapstore": path.resolve(__dirname, "MapStore2", "web", "client"),
        "@js": path.resolve(__dirname, "js")
    }
);


cfg.resolve.fallback = {
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "buffer": require.resolve("buffer/"),
    "util": require.resolve("util/"),
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false/* ,
    "crypto-browserify": require.resolve('crypto-browserify'), //if you want to use this module also don't forget npm i crypto-browserify */
};

module.exports = cfg;
