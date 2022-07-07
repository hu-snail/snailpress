import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import topLevelAwait from 'vite-plugin-top-level-await'
// https://github.com/hmsk/vite-plugin-markdown
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import markdownIt from 'markdown-it'
import {
  containerPlugin,
  highlight,
  highlightLinePlugin,
  headingPlugin
} from './src/plugin/markdown'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const root = process.cwd();
  return {
    base: './',
    root,
    publicDir: 'public',
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue']
      }),
      mdPlugin({
        mode: [Mode.HTML, Mode.TOC, Mode.VUE],
        markdownIt: markdownIt({
          html: true,
          highlight: await highlight('monokai')
        })
          .use(containerPlugin)
          .use(highlightLinePlugin)
          .use(headingPlugin)
      }),
      createSvgIconsPlugin({
        iconDirs: [resolve(__dirname, './src/assets/')]
      }),
      topLevelAwait({
        // The export name of top-level await promise for each chunk module
        promiseExportName: '__tla',
        // The function to generate import names of top-level await promise in each chunk module
        promiseImportName: i => `__tla_${i}`
      })
    ],
    server: {
      host: true,
    },
    build: {
      target: 'es2015',
      brotliSize: false,
      outDir: 'dist',
      assetsDir: 'static/',
      assetsPublicPath: './',
      chunkSizeWarningLimit: 2000,
    }
  }
})
