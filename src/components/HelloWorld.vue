<template>
  <div>{{ state.title }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';

export default defineComponent({
  setup() {
    const state = reactive({ title: 'HelloWord' });
    return { state };
  },
});
</script>
