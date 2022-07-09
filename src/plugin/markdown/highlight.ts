import { getHighlighter } from 'shiki'

export const highlight = async (theme: string = 'monokai') => {
  const highlighter = await getHighlighter({ theme })
  return (str: string, lang: string) => {
    lang = lang || 'text'
    if (typeof theme === 'string') {
      return highlighter.codeToHtml(str, { lang, theme })
    }
  }
}
