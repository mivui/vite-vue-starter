import { defineConfig } from 'vue-eslint-standard';

export default defineConfig({
  globals: {
    NodeJS: false,
    ElLoading: false,
    ElMessage: false,
    ElMessageBox: false,
    ElNotification: false,
  },
});
