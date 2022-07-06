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
          return `<div class="${klass} ${getBorderColor(
            klass
          )} borderg my-2 custom-block border rounded-md px-4 bg-gray-100 dark:bg-slate-800">
                  <p class="flex custom-block-title font-bold">
                  ${getIcon(klass)}
                  ${info || defaultTitle}
                  </p>\n`
        } else {
          return klass === 'details' ? `</details>\n` : `</div>\n`
        }
      }
    }
  ]
}

function getBorderColor(type) {
  return {
    tip: 'border-indigo-500 text-indigo-500 bg-indigo-50',
    warning: 'border-yellow-500 text-yellow-500 bg-yellow-50 ',
    danger: 'border-red-500 text-red-500 bg-red-50',
    info: 'text-gray-600 dark:text-gray-200',
    detail: 'text-gray-600'
  }[type]
}

function getIcon(type) {
  return {
    tip: `<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>`,
    info: `<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>`,
    warning: `<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>`,
    danger: `<svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
          </svg>`
  }[type]
}
