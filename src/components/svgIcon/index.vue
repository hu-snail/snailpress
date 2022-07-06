<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: '14px'
  },
  width: {
    type: String,
    default: '1em'
  }
})

const iconName = computed(() => `#icon-${props.name}`)
const svgClass = computed(() => {
  if (props.name) {
    return `svg-icon icon-${props.name}`
  }
  return 'svg-icon'
})
</script>

<!-- eg: <SvgIcon name="vue" /> -->
<template>
  <svg
    :class="svgClass"
    v-bind="$attrs"
    :style="{ 'font-size': size, color, width }"
  >
    <use :xlink:href="iconName" />
  </svg>
</template>

<style>
.svg-icon {
  height: 1em;
  vertical-align: middle;
  fill: currentColor;
}
</style>
