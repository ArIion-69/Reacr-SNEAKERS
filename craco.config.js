// craco.config.js
const path = require('path');

module.exports = {
    webpack: {
        configure: (webpackConfig, { env, paths }) => {
            const oneOfRule = webpackConfig.module.rules.find(rule => rule.oneOf);
            oneOfRule.oneOf.unshift({
                test: /\.styl$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'stylus-loader'
                ],
                include: path.resolve(__dirname, 'src')
            });

            return webpackConfig;
        }
    }
};