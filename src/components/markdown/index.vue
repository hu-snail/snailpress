<script lang="ts" setup>

defineProps({
  content: {
    type: String,
    required: true,
  },
  attributes: {
    type: Object,
  },
  toc: {
    type: Object,
  },
});
</script>
<template>
    <article v-html="content"></article>
</template>

