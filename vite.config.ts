import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { dirname, resolve } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: './',
  build: {
    outDir: 'build' // 打包后⽂件包名称
  },

  resolve: {
    alias: {
      '@': resolve(__dirname, "src"),
    }
  },
  css: {
    // css
    preprocessorOptions: {
      less: {
        charset: false,
        javascriptEnabled: true,
        additionalData: `@import "${resolve(__dirname, 'src/assets/styles/global.less')}";`
        // '@import "~/src/assets/styles/global.less";',
      },
    },
  },
  server: {
    port: 4005,    //设置服务启动端口
    open: true,    //设置服务启动时是否自动打开浏览器
    cors: true,    //允许跨域
    //设置代理
    // proxy:{
    // 	'/api':{
    // 		target:'http://xxx.xxx.xxx:8000',
    // 		changeOrigin:true,
    // 		secure:false,
    // 		rewrite:(path) => path.replace('/api/','/')
    // 	}
    // }
  }

})
