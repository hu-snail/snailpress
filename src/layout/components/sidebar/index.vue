<template>
  <div
    class="hidden lg:block fixed z-20 inset-0 top-[3.8125rem] left-[max(0px,calc(50%-48rem))] right-auto w-[19.5rem] pb-10 px-8 overflow-y-auto"
  >
    <nav class="lg:text-sm lg:leading-6 relative">
      <div class="sticky top-0 -ml-0.5 pointer-events-none">
        <div class="h-10 bg-white dark:bg-slate-900"></div>
        <div class="bg-white dark:bg-slate-900 relative pointer-events-auto">
          <button
            type="button"
            class="hidden w-full lg:flex items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700"
          >
            <svg
              width="24"
              height="24"
              fill="none"
              aria-hidden="true"
              class="mr-3 flex-none"
            >
              <path
                d="m19 19-3.5-3.5"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <circle
                cx="11"
                cy="11"
                r="6"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></circle></svg
            >Quick search...<span
              class="ml-auto pl-3 flex-none text-xs font-semibold"
              >⌘K</span
            >
          </button>
        </div>
      </div>
      <ul>
        <li class="mt-12 lg:mt-8">
          <h5
            class="mb-8 lg:mb-3 font-semibold text-slate-900 dark:text-slate-200"
          >
            Getting Started
          </h5>
          <ul
            class="space-y-6 lg:space-y-2 border-l border-slate-100 dark:border-slate-800"
          >
            <li>
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="/docs/installation"
                >Installation</a
              >
            </li>
            <li>
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="/docs/editor-setup"
                >Editor Setup</a
              >
            </li>
            <li>
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="/docs/using-with-preprocessors"
                >Using with Preprocessors</a
              >
            </li>
            <li>
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="/docs/optimizing-for-production"
                >Optimizing for Production</a
              >
            </li>
            <li>
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="/docs/browser-support"
                >Browser Support</a
              >
            </li>
            <li>
              <a
                class="block border-l pl-4 -ml-px border-transparent hover:border-slate-400 dark:hover:border-slate-500 text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300"
                href="/docs/upgrade-guide"
                >Upgrade Guide</a
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>
