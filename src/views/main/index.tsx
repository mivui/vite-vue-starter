import { defineComponent } from 'vue';
import styles from './style/index.module.less';

export default defineComponent({
  name: 'Index',
  setup() {
    document.title = import.meta.env.VITE_APP_TITLE;

    return () => {
      return <div class={styles.helloWorld}>Hello World!</div>;
    };
  },
});
