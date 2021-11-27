<template>
  <div>{{ state.title }}</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
123
const state = reactive({ title: 'HelloWord' });
</script>
