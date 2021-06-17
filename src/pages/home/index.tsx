import { defineComponent } from 'vue';
import Logo from '@/assets/logo.png';
import styles from './style/index.module.less';

export default defineComponent({
  name: 'Home',
  setup() {
    document.title = import.meta.env.VITE_APP_TITLE;

    return () => {
      return (
        <div class={styles.helloWorld}>
          <img src={Logo} alt="Vue" />
          <div>Hello World!</div>
        </div>
      );
    };
  },
});
