<script lang="ts" setup>
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
</script>
<template>
  <article
    class="prose prose-slate dark:prose-invert prose-img:rounded-xl max-w-none"
    v-html="content"
  ></article>
</template>
