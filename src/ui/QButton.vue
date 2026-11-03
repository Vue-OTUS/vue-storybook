<template>
  <UButton :color="color" :style="styles"><slot></slot></UButton>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  color: 'primary' | 'secondary' | 'error'
  anyColor?: string
}>()

const styles = computed(() => {
  return {
    background: props.anyColor,
  }
})
</script>
