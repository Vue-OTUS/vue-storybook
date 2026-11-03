<template>
  <h1>Home page</h1>
  <UButton icon="i-lucide-rocket" color="secondary">Button</UButton>
  <QButton color="error" @click="showToast">qwe</QButton>
</template>

<script setup lang="ts">
import QButton from '@/ui/QButton.vue'

const toast = useToast()

function showToast() {
  toast.add({
    title: 'Title',
    description: 'Description',
  })
}
</script>
