import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
// https://github.com/hmsk/vite-plugin-markdown
import mdPlugin, { Mode } from 'vite-plugin-markdown'

import createRenderer from './build/plugin/md-render'
import markdownIt from 'markdown-it'
import {
  containerPlugin,
  highlight,
  highlightLinePlugin,
  headingPlugin
} from './build/plugin/markdown'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  plugins: [
    vue(),
    mdPlugin({
      mode: [Mode.HTML, Mode.TOC, Mode.VUE],
      markdown: (content) => {
        return createRenderer(content)
      },
      markdownIt: markdownIt({ html: true, highlight })
        .use(containerPlugin)
        .use(highlightLinePlugin)
        .use(headingPlugin)
    })
  ]
})
