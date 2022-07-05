<template>
  <div class="lg:pl-[22.5rem]">
    <div
      class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16"
    >
      <header id="header" class="relative z-20">
        <div>
          <p
            class="mb-2 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400"
          >
            Official Plugins
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
      <div class="relative z-20 mt-8">
        <router-view></router-view>
      </div>
      <footer class="text-sm leading-6 mt-12">
        <div
          class="mb-10 text-slate-700 font-semibold flex items-center dark:text-slate-200"
        >
          <a
            class="group flex items-center hover:text-slate-900 dark:hover:text-white"
            href="/docs/installation"
            ><svg
              viewBox="0 0 3 6"
              class="mr-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
            >
              <path
                d="M3 0L0 3L3 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
            >Installation</a
          ><a
            class="group ml-auto flex items-center hover:text-slate-900 dark:hover:text-white"
            href="/docs/using-with-preprocessors"
            >Using with Preprocessors<svg
              viewBox="0 0 3 6"
              class="ml-3 w-auto h-1.5 text-slate-400 overflow-visible group-hover:text-slate-600 dark:group-hover:text-slate-300"
            >
              <path
                d="M0 0L3 3L0 6"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path></svg
          ></a>
        </div>
        <div
          class="pt-10 pb-28 border-t border-slate-200 sm:flex justify-between text-slate-500 dark:border-slate-200/5"
        >
          <div class="mb-6 sm:mb-0 sm:flex">
            <p>
              Copyright ©
              <!-- -->2022<!-- -->
              Tailwind Labs Inc.
            </p>
            <p
              class="sm:ml-4 sm:pl-4 sm:border-l sm:border-slate-200 dark:sm:border-slate-200/5"
            >
              <a
                class="hover:text-slate-900 dark:hover:text-slate-400"
                href="/brand"
                >Trademark Policy</a
              >
            </p>
          </div>
          <a
            class="hover:text-slate-900 dark:hover:text-slate-400"
            href="https://github.com/tailwindlabs/tailwindcss.com/edit/master/src/pages/docs/editor-setup.mdx"
            >Edit this page on GitHub</a
          >
        </div>
      </footer>
      <div
        class="fixed z-20 top-[3.8125rem] bottom-0 right-[max(0px,calc(50%-50rem))] w-[19.5rem] py-10 px-8 overflow-y-auto hidden xl:block"
      >
        <h5
          class="text-slate-900 font-semibold mb-4 text-sm leading-6 dark:text-slate-100"
        >
          On this page
        </h5>
        <ul class="text-slate-700 text-sm leading-6">
          <li>
            <a
              href="#syntax-support"
              class="block py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
              >Syntax support</a
            >
          </li>
          <li>
            <a
              href="#intelli-sense-for-vs-code"
              class="block py-1 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
              >IntelliSense for VS Code</a
            >
          </li>
          <li>
            <a
              href="#jet-brains-id-es"
              class="block py-1 font-medium text-sky-500 dark:text-sky-400"
              >JetBrains IDEs</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
