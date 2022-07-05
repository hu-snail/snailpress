import { getHighlighter } from 'shiki'


export const highlight = async (theme='material-palenight') => {
  const highlighter = await getHighlighter({ theme })
  const preRE = /^<pre.*?>/
  return (str, lang) => {
    lang = lang || 'text'
    if (typeof theme === 'string') {
      return highlighter
        .codeToHtml(str, { lang, theme })
    }
  }
}
