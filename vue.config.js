'use strict'
const path = require('path')
 
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
  lintOnSave: false,
  pages: {
    index: {  
      entry: './src/main.js',
      template: 'public/index.html'
    },
    h5: {
      entry: './src/h5.js',
      template: 'public/h5.html'
    }
  },
  publicPath: './',
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: '认证系统',
    resolve: {
        alias: {
            // 设置@/的意义
            '@': resolve('src')
        }
    }
  },
  devServer: {
		// 代理配置
		proxy: {
			// 当我们本地访问带有/api的时候才会触发跨域
			'/api': {
				target: 'http://localhost:8888', // 要代理的地址
				changeOrigin: true, // 是否跨域,需要设置为true
        // 路径重写
				pathRewrite: {
					// 路径重写默认 localhost: xxx/api/abc => www.xxx.com/api/abc
					'^/api': '' // 设置为 localhost: xxx/api/abc => www.xxx.com/abc
				}
			}
		}
	}
}