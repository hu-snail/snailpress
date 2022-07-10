<script lang="ts" setup>
import { onMounted } from 'vue';
import Plyr from 'plyr';
import { parseCodeHeader } from '../../utils/parseHeader'
import baseIcon from 'plyr/dist/plyr.svg'
defineProps({
  content: {
    type: String,
    required: true
  },
  attributes: {
    type: Object
  },
  toc: {
    type: Object
  }
})
onMounted(() => {
  const videos = document.getElementsByTagName('video')
  for(let i = 0; i < videos.length; i++) {
    new Plyr(videos[i], {
      iconUrl: baseIcon
    });
  }
  const audios = document.getElementsByTagName('audio')
  for(let i = 0; i < audios.length; i++) {
    new Plyr(audios[i], {
      iconUrl: baseIcon
    });
  }
})
</script>
<template>
  <header class="relative z-20">
    <div>
      <p
        class="mb-2 text-sm leading-6 font-semibold text-indigo-500 dark:text-indigo-500"
      >
        正式版本
      </p>
      <div class="flex items-center">
        <h1
          class="inline-block text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200"
        >
          @tailwindcss/typography
        </h1>
        <a
          href="https://github.com/tailwindlabs/tailwindcss-typography"
          class="ml-3 block text-slate-400 hover:text-slate-500 dark:hover:text-slate-300 sm:mt-1 sm:ml-4"
          ><span class="sr-only">View on GitHub</span
          ><svg
            viewBox="0 0 16 16"
            class="w-5 h-5 sm:w-6 sm:h-6"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
            ></path></svg
        ></a>
      </div>
    </div>
    <p class="mt-2 text-lg text-slate-700 dark:text-slate-400">
      Beautiful typographic defaults for HTML you don't control.
    </p>
  </header>
  <article
    class="mt-8 prose prose-slate prose-a:text-indigo-500 prose-a:no-underline dark:prose-invert prose-img:rounded-xl max-w-none"
    v-html="content"
  ></article>
  <div
    class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-48rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"
  >
    <h5
      class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"
    >
      On this page
    </h5>
    <ul class="text-slate-700 border-l px-4 text-sm leading-6">
      <template v-for="item in toc" :key="item.content">
        <li v-if="item.level == 2">
          <a
            :href="`#${parseCodeHeader(item.content)}`"
            v-html="item.content"
            class="block py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
          ></a>
        </li>
      </template>
    </ul>
  </div>
</template>
