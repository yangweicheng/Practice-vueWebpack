var webpack = require("webpack");
var path = require("path");
var glob = require('glob');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var plugins = [];
var allJs = {};
/*
 *path.basename 截取最后一个/的路径
 *path.extname 截取后缀
 */
glob.sync('./app/**/*.js').forEach(function(f) {
    var name = path.basename(f, path.extname(f));
    allJs['js/' + name] = f;
})
allJs['vendor'] = ['vue', 'vue-router', 'vue-resource'];
// console.log(allJs);
var filterK={}
for(var i in allJs){
    if(i != 'vendor'){
        filterK[i]=i
    }
}
var allHtml = {};
glob.sync('./app/**/*.html').forEach(function(f) {
    var name = path.basename(f, path.extname(f));
    allHtml[name] = f;
})
//console.log(allHtml);
for (var page in allHtml) {
    //console.log(page);
    var conf = {
        filename: page + '.html',
        template: allHtml[page],
        inject: true,
        excludeChunks:Object.keys(filterK).filter(item=>{
            return 'js/'+page!=item
        })
        //chunks: ['js/' + page,'vendor']
    }
    //console.log(conf.chunks)
    // 新建页面，有多少个配置建几个页面
    plugins.push(new HtmlWebpackPlugin(conf))
}
//热加载
// plugins.push(new webpack.optimize.OccurenceOrderPlugin());
plugins.push(new webpack.HotModuleReplacementPlugin());
plugins.push(new webpack.NoErrorsPlugin());
//全局变量
var api = new webpack.DefinePlugin({
    apiD: false
});
plugins.push(api);
var comminsAll = new CommonsChunkPlugin({
    name: 'vendor',
    minChunks: Infinity
})
plugins.push(comminsAll);
//console.log(plugins)
// webpack-hot-middleware/client
// 动态向入口配置中注入 webpack-hot-middleware/client
var devClient = './dev-client';
Object.keys(allJs).forEach(function(name, i) {
    //console.log(name);
    //console.log(i)
    var extras = [devClient]
    allJs[name] = extras.concat(allJs[name])
})
console.log(allJs)
module.exports = {
    entry: allJs,
    output: {
        path: path.resolve(__dirname, './dist/'),
        publicPath: '/',
        filename: '[name].js'
    },
    module: {
        rules: [
            //解析.vue结尾的文件
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: '/node_modules/'
            },
            {
                test: /\.css$/,
                loader: 'style!css!'
            },
            {
                test:/\.json$/,
                loader:'json-loader',
                exclude:'/node_modules/'
            }
        ]
    },
    plugins: plugins,
    resolve: {
        extensions: ['.js', '.vue']
    }
}
