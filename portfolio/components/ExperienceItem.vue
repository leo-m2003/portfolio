<script setup lang="ts">
const { item } = defineProps({
  item: {
    type: Object,
    default: () => {
      return {
        title: "",
        subtitle: "",
        arrow: false,
        arrowType: "",
      };
    },
  },
});
</script>

<template>
  <div class="flex flex-col items-center text-center gap-2">
    <div class="flex flex-col gap-1">
      <p class="text-sm font-bold leading-6">{{ item.title }}</p>
      <p v-if="item.subtitle" class="text-sm">{{ item.subtitle }}</p>
    </div>
    <div v-if="item.arrow">
      <img
        v-if="item.arrowType === 'dashed'"
        src="~/assets/img/dashed-arrow.svg"
        alt="icon-dashed-arrow"
        class="max-h-[70px]"
      />
      <img
        v-else
        src="~/assets/img/arrow.svg"
        alt="icon-arrow"
        class="max-h-[70px]"
      />
    </div>
  </div>
</template>
