<template>
  <div class="lg:pl-[22.5rem]">
    <div
      class="max-w-3xl mx-auto pt-10 xl:max-w-none xl:ml-0 xl:mr-[15.5rem] xl:pr-16"
    >
      <div class="relative z-20">
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
    </div>
  </div>
</template>
