import { h, PropType } from 'vue'
import Markdown from '@/components/markdown/index.vue'

const md = (
  content: string,
  attributes: PropType<object>,
  toc: PropType<string[]>
) => h(Markdown, { content, attributes, toc, key: content })
const modules = import.meta.glob('@/docs/**')

let docMenus: any[] = []
for (const key in modules) {
  if (key.indexOf('.md') !== -1) {
    const { html, attributes, toc } = await modules[key]()
    const Doc = md(html, attributes, toc)
    const { path, name } = attributes
    docMenus.push({ path, component: Doc, name })
  } else console.error('The file suffix can only be ".md":' + key)
}

export { docMenus }
