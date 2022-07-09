import { h, PropType } from 'vue'
import Markdown from '@/components/markdown/index.vue'
import { RouteRecordRaw } from 'vue-router'
const md = (
  content: string,
  attributes: PropType<object>,
  toc: PropType<string[]>
) => h(Markdown, { content, attributes, toc, key: content })
const modules = import.meta.globEager('@/docs/**')

let docsMenus:Array<RouteRecordRaw> = []
for (const key in modules) {
  if (key.indexOf('.md') !== -1) {
    const { html, attributes, toc } = modules[key]
    const { path, name } = attributes
    docsMenus.push({ path, component: () => Promise.resolve(md(html, attributes, toc)), name })
  } else console.error('The file suffix can only be ".md":' + key)
}

export const docsRouer = docsMenus
