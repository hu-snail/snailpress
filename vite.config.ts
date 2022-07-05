import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
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
  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue(),
      mdPlugin({
        mode: [Mode.HTML, Mode.TOC, Mode.VUE],
        markdownIt: markdownIt({
          html: true,
          highlight: await highlight('monokai')
        })
          .use(containerPlugin)
          .use(highlightLinePlugin)
          .use(headingPlugin)
      })
    ]
  }
})
