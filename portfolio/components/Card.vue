<script setup lang="ts">
const { color } = defineProps({
  color: {
    type: String,
    default: "bg-white",
  },
});
</script>

<template>
  <div :class="[color === 'blue' ? 'bg-primary' : 'bg-white' , 'rounded-2xl box-shadow']">
    <slot />
  </div>
</template>
