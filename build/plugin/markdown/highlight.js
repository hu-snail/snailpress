import escapeHtml from 'escape-html'
import prism from 'prismjs'

// prism is listed as actual dep so it's ok to require
const loadLanguages = require('prismjs/components/index')

// required to make embedded highlighting work...
loadLanguages(['markup', 'css', 'javascript'])

function wrap(code, lang) {
  if (lang === 'text') {
    code = escapeHtml(code)
  }
  return `<pre v-pre><code class="code-card">${code}</code></pre>`
}

export const highlight = (str, lang) => {
  if (!lang) {
    return wrap(str, 'text')
  }
  lang = lang.toLowerCase()
  const rawLang = lang
  if (lang === 'vue' || lang === 'html') {
    lang = 'markup'
  }
  if (lang === 'md') {
    lang = 'markdown'
  }
  if (lang === 'ts') {
    lang = 'typescript'
  }
  if (lang === 'py') {
    lang = 'python'
  }
  if (lang === 'sh') {
    lang = 'shell'
  }
  if (!prism.languages[lang]) {
    try {
      loadLanguages([lang])
    } catch (e) {
      console.warn(
        `[awesome code] Syntax highlight for language "${lang}" is not supported.`
      )
    }
  }
  if (prism.languages[lang]) {
    const code = prism.highlight(str, prism.languages[lang], lang)
    return wrap(code, rawLang)
  }
  return wrap(str, 'text')
}
