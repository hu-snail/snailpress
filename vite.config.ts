import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// https://github.com/hmsk/vite-plugin-markdown
import mdPlugin, { Mode } from 'vite-plugin-markdown'
import markdownIt from 'markdown-it'
import {
  containerPlugin,
  highlight,
  highlightLinePlugin,
  headingPlugin
} from './src/plugin/markdown'

import {svgBuilder} from './src/plugin/svgbuild'
// https://vitejs.dev/config/
export default defineConfig(async () => {
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      AutoImport({
        // 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
        imports: ['vue'],
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
        iconDirs: [resolve(__dirname, './src/assets/')],
      })
    ]
  }
})
