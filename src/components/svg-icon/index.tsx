import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    class: { type: String },
    prefix: {
      type: String,
      default: 'icon',
    },
    name: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.name}`);
    return () => (
      <svg class={props.class} aria-hidden="true">
        <use xlinkHref={symbolId.value} />
      </svg>
    );
  },
});
