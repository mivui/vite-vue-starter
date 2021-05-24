import { defineComponent } from 'vue';
import styles from './style/index.module.less';

export default defineComponent({
  name: 'Index',
  setup() {
    /* Component Data */

    /* Component Methods */

    /* Component Mounted */

    /* Component Watch */

    /* Component Render */
    return () => {
      return <div class={styles.helloWorld}>Hello World!</div>;
    };
  },
});
