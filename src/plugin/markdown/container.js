import container from 'markdown-it-container'

export const containerPlugin = (md) => {
  md.use(...createContainer('tip', 'TIP'))
    .use(...createContainer('info', 'INFO'))
    .use(...createContainer('warning', 'WARNING'))
    .use(...createContainer('danger', 'WARNING'))
    .use(...createContainer('details', 'DETAILS'))
    // explicitly escape Vue syntax
    .use(container, 'v-pre', {
      render: (tokens, idx) =>
        tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`
    })
}

function createContainer(klass, defaultTitle) {
  return [
    container,
    klass,
    {
      render(tokens, idx) {
        const token = tokens[idx]
        const info = token.info.trim().slice(klass.length).trim()
        if (token.nesting === 1) {
          if (klass === 'details') {
            return `<details class="${klass} custom-block">${
              info ? `<summary>${info}</summary>` : ''
            }\n`
          }
          return `<div class="${klass} ${getBorderColor(klass)} borderg my-2 custom-block border rounded-md px-4 bg-gray-100 dark:bg-slate-800"><p class="custom-block-title font-bold">${
            info || defaultTitle
          }</p>\n`
        } else {
          return klass === 'details' ? `</details>\n` : `</div>\n`
        }
      }
    }
  ]
}

function getBorderColor (type) {
  return {
    'tip': 'border-indigo-500 text-indigo-500 bg-indigo-50',
    'warning': 'border-yellow-500 text-yellow-500 bg-yellow-50 ',
    'danger': 'border-red-500 text-red-500 bg-red-50',
    'info': 'text-gray-600 dark:text-gray-200',
    'detail': 'text-gray-600'
  }[type]
}
