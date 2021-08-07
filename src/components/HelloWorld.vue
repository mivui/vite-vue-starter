<template>
  <div>HelloWorld</div>
</template>

<script setup lang="ts">
interface Props {
  foo: string;
  bar?: number;
}

interface Emits {
  (e: 'change', id: number): void;
  (e: 'update', value: string): void;
}

const props = defineProps<Props>();

const emit = defineEmits<Emits>();
emit('change', 1);
</script>
