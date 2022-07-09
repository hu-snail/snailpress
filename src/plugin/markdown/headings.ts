import MarkdownIt from 'markdown-it'
import { deeplyParseHeader } from '../../utils/parseHeader'
export const headingPlugin = (md: MarkdownIt) => {
  md.renderer.rules.heading_open = (tokens, i, options, env, self) => {
    const title = tokens[i + 1].content
    tokens[i].attrJoin('id', deeplyParseHeader(title))
    tokens[i].attrJoin('class', 'md-title')
    return self.renderToken(tokens, i, options)
  }
}
