<template>
  <div>{{ props.bar }}</div>
</template>

<script setup lang="ts">
export interface CustomProps {
  foo: string;
  bar?: number;
}

export interface CustomEmits {
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}

const props = defineProps<CustomProps>();
withDefaults(props, { foo: 'HelloWord' });

const emit = defineEmits<CustomEmits>();
emit('change', 1);
</script>
