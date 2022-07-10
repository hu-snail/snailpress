import MarkdownIt from 'markdown-it'
import { RenderRule } from 'markdown-it/lib/renderer'
import Token from 'markdown-it/lib/token'
import container from 'markdown-it-container'

export const containerPlugin = (md: MarkdownIt) => {
  md.use(...createContainer('tip', 'TIP'))
    .use(...createContainer('info', 'INFO'))
    .use(...createContainer('warning', 'WARNING'))
    .use(...createContainer('danger', 'WARNING'))
    .use(...createContainer('details', 'DETAILS'))
    .use(...createContainer('video', 'VIDEO'))
    .use(...createContainer('audio', 'AUDIO'))
    // explicitly escape Vue syntax
    .use(container, 'v-pre', {
      render: (tokens: Token[], idx: number) =>
        tokens[idx].nesting === 1 ? `<div v-pre>\n` : `</div>\n`
    })
}

type ContainerArgs = [typeof container, string, { render: RenderRule }]

function createContainer(klass: string, defaultTitle: string): ContainerArgs {
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
          if (klass === 'video') {
            return `<video preload="auto" playsinline controls width="320" height="240" controls>
            <source src="${info}" type="video/mp4">
          </video>`
            }
          if (klass === 'audio') {
              return `<audio class="border" controls>
              <source src="${info}" type="audio/mp3" />
            </audio>`
          }
          return `<div class="${klass} ${getBorderColor(
            klass
          )} borderg my-2 custom-block border rounded-md px-4 bg-gray-50 dark:bg-slate-800">
                  <p class="flex custom-block-title font-bold">
                  <svg xmlns="http://www.w3.org/2000/svg" class="mr-2 h-6 w-6 ${getIconColor(
                    klass
                  )}" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="${getIcon(
                      klass
                    )}" />
                  </svg>
                  ${info || defaultTitle}
                  </p>\n`
        } else {
          return klass === 'details' ? `</details>\n` : `</div>\n`
        }
      }
    }
  ]
}

function getBorderColor(type: string) {
  return {
    tip: 'border-indigo-500',
    warning: 'border-yellow-500 ',
    danger: 'border-red-500',
    info: 'text-gray-600 dark:text-gray-200',
    detail: 'text-gray-600'
  }[type]
}

function getIconColor(type: string) {
  return {
    tip: 'text-indigo-500',
    warning: 'text-yellow-500',
    danger: 'text-red-500',
    info: 'text-gray-600 dark:text-gray-200',
    detail: 'text-gray-600 dark:text-gray-200'
  }[type]
}

function getIcon(type: string) {
  return {
    tip: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    warning: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8',
    danger: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8'
  }[type]
}
