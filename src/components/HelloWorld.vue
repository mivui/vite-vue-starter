<template>
  <div>{{ state.title }}</div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const state = reactive({ title: 'HelloWord' });
</script>
