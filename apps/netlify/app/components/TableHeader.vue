<script setup lang="ts">
const props = defineProps<{
  rowspan?: number | string;
  colspan?: number | string;
}>();
</script>

<template>
  <th
    :rowspan="props.rowspan"
    :colspan="props.colspan"
    class="w-1/2 border border-gray-300 p-4 font-semibold text-gray-900 dark:border-gray-600 dark:text-gray-200"
  >
    <slot></slot>
  </th>
</template>
