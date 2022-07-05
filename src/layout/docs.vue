<script lang="ts" setup>
import SnailNavbar from './components/navbar/index.vue'
import SnailSideBar from './components/sidebar/index.vue'
import SnailMain from './components/main/index.vue'
</script>

<template>
  <!-- navbar -->
  <SnailNavbar />
  <div>
    <div class="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-8">
      <!-- sidebar -->
      <SnailSideBar />
      <!-- main -->
      <SnailMain />
    </div>
  </div>
</template>
