<script setup lang="ts">
defineProps<{
  title: string,
  value: string
}>()
</script>

<template>
  <div>
    <div>
      <b>{{ title }}:</b>
    </div>
    {{ value }}
  </div>
</template>
