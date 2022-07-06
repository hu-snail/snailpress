const unescapeHtml = (html: string) =>
  html
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&#x3A;/g, ':')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')

const removeMarkdownTokens = (str: string) =>
  str
    .replace(/(\[(.[^\]]+)\]\((.[^)]+)\))/g, '$2') // []()
    .replace(/(`|\*{1,3}|_)(.*?[^\\])\1/g, '$2') // `{t}` | *{t}* | **{t}** | ***{t}*** | _{t}_
    .replace(/(\\)(\*|_|`|\!|<|\$)/g, '$2') // remove escape char '\'

const removeCustomAnchor = (str: string) =>
  str.replace(/\{#([a-z0-9\-_]+?)\}\s*$/, '') // {#custom-header}

const trim = (str: string) => str.trim()

export const removeNonCodeWrappedHTML = (str: string) => {
  return String(str).replace(/(^|[^><`\\])<.*>([^><`]|$)/g, '$1$2')
}

const compose = (...processors: ((str: string) => string)[]) => {
  if (processors.length === 0) return (input: string) => input
  if (processors.length === 1) return processors[0]
  return processors.reduce((prev, next) => {
    return (str) => next(prev(str))
  })
}

export const parseHeader = compose(
  unescapeHtml,
  removeCustomAnchor,
  removeMarkdownTokens,
  trim
)

export const parseCodeHeader = (content:string) => {
    return content.replace(/<\/?.+?>/g, "")
 }
export const deeplyParseHeader = compose(removeNonCodeWrappedHTML, parseHeader)