<template>
  <div>{{ state.title }}</div>
  <div>{{ state.title }}</div>
  <div>{{ state.title }}</div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
const state = reactive({ title: 'HelloWord' });
</script>
