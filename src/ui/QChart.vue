<script setup lang="ts">
import type { ChartData } from '@nuxt/ui'

defineProps<{ data: ChartData[] }>()
</script>

<template>
  <UChart
    :data="data"
    index="month"
    :categories="[
      {
        key: 'desktop',
        label: 'Desktop',
      },
      {
        key: 'mobile',
        label: 'Mobile',
      },
    ]"
  />
</template>
