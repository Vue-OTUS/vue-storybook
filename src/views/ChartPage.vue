<template>
  <QChart :data="data"></QChart>
</template>

<script setup lang="ts">
import QChart from '@/ui/QChart.vue'
import { ref } from 'vue'

const data = ref([
  {
    month: 'January',
    desktop: 186,
    mobile: 80,
  },
  {
    month: 'February',
    desktop: 305,
    mobile: 200,
  },
  {
    month: 'March',
    desktop: 237,
    mobile: 120,
  },
  {
    month: 'April',
    desktop: 73,
    mobile: 190,
  },
  {
    month: 'May',
    desktop: 209,
    mobile: 130,
  },
  {
    month: 'June',
    desktop: 214,
    mobile: 140,
  },
])
</script>
