<script lang="ts" setup>
import SnailNavbar from './components/navbar/index.vue'
</script>
<template>
  <SnailNavbar />
  <div class="max-w-screen-2xl mx-auto">
    <div class="py-4 lg:px-0 lg:border-0 mx-4 lg:mx-0">
      <div
        class="relative overflow-hidden bg-white dark:bg-slate-900 pt-6 md:pt-[1.75rem]"
      >
        <div
          class="absolute inset-y-0 hidden w-full min-w-[1360px] bg-[length:2000px_100%] bg-[position:calc(50%_+_220px)_-50px] bg-no-repeat lg:block"
        ></div>
        <div class="mx-auto max-w-container px-4 pt-4 sm:px-6 lg:flex lg:px-8">
          <div
            class="relative z-20 mx-auto max-w-[40rem] pb-16 pt-16 lg:mx-0 lg:w-[40rem] lg:max-w-none lg:flex-none lg:pb-24 lg:pr-4 lg:pt-20"
          >
            <div class="text-5xl font-extrabold ...">
              <span
                class="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-violet-500"
              >
                SnailPress
              </span>
            </div>
            <p
              class="mt-4 text-3xl font-extrabold tracking-[-0.04em] text-black dark:text-slate-300 sm:text-5xl sm:leading-[3.5rem]"
            >
              Generate your high-value static documents
            </p>
            <p
              class="mt-4 text-base leading-7 text-slate-600 dark:text-slate-300"
            >
              Vite & Vue3 & Tailwind powered static site generator.
            </p>
            <div class="mt-8 flex gap-4">
              <a
                href="#browse"
                class="inline-flex justify-center rounded-lg text-sm font-semibold py-3 px-4 bg-indigo-500 text-white hover:bg-indigo-700"
                ><span>Get Start</span>
                <span aria-hidden="true" class="text-gray-100 ml-2 sm:inline"
                  >→</span
                ></a
              ><a
                class="inline-flex justify-center rounded-lg text-sm dark:text-slate-300 font-semibold py-3 px-4 bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15"
                href="/all-access"
                ><span>
                  View on Github
                  <span
                    aria-hidden="true"
                    class="text-black/25 dark:text-slate-300 ml-2 sm:inline"
                    >→</span
                  ></span
                ></a
              >
            </div>
          </div>
          <div class="relative z-10 hidden lg:block">
            <div class="mt-16 flex">
              <div class="relative flex-shrink-0 p-4">
                <div style="background-color: #292d3e " class="px-4  pt-4 border rounded-md">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 42 10"
                    fill="none"
                    class="h-2.5 px-4 w-auto stroke-slate-500/30"
                  >
                    <circle cx="5" cy="5" r="4.5" fill="#f45"></circle>
                    <circle cx="21" cy="5" r="4.5" fill="#ffc107"></circle>
                    <circle cx="37" cy="5" r="4.5" fill="#4caf50"></circle>
                  </svg>

                  <div class="flex items-start text-sm" id="code">
                    <pre
                      class="shiki"
                      style="background-color: #272822"
                    ><code><span class="line"><span style="color: #88846F"># clone</span></span>
<span class="line"><span style="color: #F8F8F2">git clone git@github.com:hu-snail/snailpress.git</span></span>
<span class="line"><span style="color: #88846F"># cd project</span></span>
<span class="line"><span style="color: #66D9EF">cd</span><span style="color: #F8F8F2"> snailpress</span></span>
<span class="line"><span style="color: #88846F"># install</span></span>
<span class="line"><span style="color: #F8F8F2">pnpm i</span></span>
<span class="line"><span style="color: #88846F"># run dev</span></span>
<span class="line"><span style="color: #F8F8F2">pnpm run dev</span></span>
<span class="line"></span></code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative z-20 sm:z-auto">
          <div class="mx-auto max-w-container px-4 pb-16 sm:px-6 lg:px-8">
            <div
              class="relative mx-auto grid max-w-[40rem] grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
            >
              <div class="flex">
                <div class="p-0.5">
                  <svg
                    class="h-10 w-10 shrink-0 rounded-lg shadow-md shadow-sky-500/[.12] transform-cpu"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                      class="fill-sky-50 stroke-sky-500"
                    ></path>
                    <path
                      opacity="0.4"
                      d="M17.25 33.25h-8.5a2 2 0 01-2-2V8.75a2 2 0 012-2h22.5a2 2 0 012 2v1m-4 3h-18.5"
                      class="stroke-sky-500/40"
                    ></path>
                    <path
                      d="M31.25 12.75h-8.5a2 2 0 00-2 2v16.5a2 2 0 002 2h8.5a2 2 0 002-2v-16.5a2 2 0 00-2-2z"
                      class="fill-white stroke-sky-500"
                    ></path>
                    <path d="M26.75 30.25h.5" class="stroke-sky-500"></path>
                  </svg>
                </div>
                <div class="ml-6">
                  <h2
                    class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300"
                  >
                    Built with modern technologies
                  </h2>
                  <p
                    class="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400"
                  >
                    Each template is a well-structured Next.js project, giving
                    you a codebase that’s productive and enjoyable to work in.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="p-0.5">
                  <svg
                    class="h-10 w-10 shrink-0 rounded-lg shadow-md shadow-sky-500/[.12] transform-cpu"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                      class="fill-sky-50 stroke-sky-500"
                    ></path>
                    <path
                      d="M24.847 33.25L19.82 20.113c-.324-.846.543-1.656 1.351-1.261L33.25 24.75l-6.426 2-1.977 6.5z"
                      class="fill-white stroke-sky-500"
                    ></path>
                    <path
                      d="M33.25 20.25V9.75a3 3 0 00-3-3H9.75a3 3 0 00-3 3v20.5a3 3 0 003 3h10.5"
                      class="stroke-sky-500/40"
                    ></path>
                    <path d="M11.75 11.75v16.5" class="stroke-sky-500"></path>
                  </svg>
                </div>
                <div class="ml-6">
                  <h2
                    class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300"
                  >
                    Easy to customize
                  </h2>
                  <p
                    class="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400"
                  >
                    Everything is styled with utility classes, just open the
                    markup in your editor and change whatever you want.
                  </p>
                </div>
              </div>
              <div class="flex">
                <div class="p-0.5">
                  <svg
                    class="h-10 w-10 shrink-0 rounded-lg shadow-md shadow-sky-500/[.12] transform-cpu"
                    viewBox="0 0 40 40"
                    fill="none"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path
                      d="M.75 8A7.25 7.25 0 018 .75h24A7.25 7.25 0 0139.25 8v24A7.25 7.25 0 0132 39.25H8A7.25 7.25 0 01.75 32V8z"
                      class="fill-sky-50 stroke-sky-500"
                    ></path>
                    <path
                      d="M31.817 26a13.194 13.194 0 001.433-6c0-7.318-5.932-13.25-13.25-13.25S6.75 12.682 6.75 20c0 2.16.517 4.199 1.433 6"
                      class="stroke-sky-500/40"
                    ></path>
                    <path
                      d="M15.75 18a4.25 4.25 0 108.5 0 4.25 4.25 0 00-8.5 0z"
                      class="fill-white stroke-sky-500"
                    ></path>
                    <path
                      d="M28.982 29.74c-.994-2.29-4.638-3.99-8.982-3.99-4.344 0-7.989 1.7-8.982 3.99A13.202 13.202 0 0020 33.25c3.466 0 6.62-1.33 8.982-3.51z"
                      class="fill-white stroke-sky-500"
                    ></path>
                  </svg>
                </div>
                <div class="ml-6">
                  <h2
                    class="text-sm font-semibold leading-6 text-slate-900 dark:text-slate-300"
                  >
                    Built by experts
                  </h2>
                  <p
                    class="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-400"
                  >
                    All of the code follows Tailwind CSS best practices, because
                    it’s written by the same team who created and maintain the
                    framework.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="pointer-events-none absolute inset-0 shadow-[inset_0_-1px_1px_rgba(0,0,0,0.06)]"
        ></div>
      </div>
    </div>
  </div>
</template>
