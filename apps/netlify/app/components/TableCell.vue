<script setup lang="ts">
const props = defineProps<{
  rowspan?: number | string;
  colspan?: number | string;
}>();
</script>

<template>
  <td
    :rowspan="props.rowspan"
    :colspan="props.colspan"
    class="border border-gray-300 p-4 text-gray-500 dark:border-gray-700 dark:text-gray-400"
  >
    <slot></slot>
  </td>
</template>
