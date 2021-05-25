import { defineComponent } from 'vue';
import styles from './style/index.module.less';

export default defineComponent({
  name: 'Index',
  setup() {
    /* Component Data */
    document.title = import.meta.env.VITE_APP_TITLE;
    /* Component Methods */

    /* Component Mounted */

    /* Component Watch */

    /* Component Render */
    return () => {
      return <div class={styles.helloWorld}>Hello World!</div>;
    };
  },
});
