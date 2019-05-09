const withPlugins = require("next-compose-plugins");
const withSass = require('@zeit/next-sass')

module.exports = withPlugins([
    withSass
], {
        exportPathMap: function() {
            return {
              '/': { page: '/' },
              '/about': { page: '/about' },
              '/shop': { page: '/shop' }
            }
        }
    }
 );