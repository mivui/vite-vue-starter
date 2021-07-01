```ts
import { prop } from '@/vue-prop';

const props = {
  name: prop.stringNumber.define('123').mustProp,
  //{type:[String,Number],required:true,default:123}
  test: prop.string.prop,
  //{type:[String]}
  title: prop.func<() => void>().prop,
  //{type:Function as PropType<()=>void>}
  content: prop.vueNode.prop,
  //{type:[Object,String] as PropType<JSX.Element|null|string>}
  style: prop.css.define({ height:'20px' }).prop,
  //{type:[Object] as PropType<CSSProperties>,default:{ height:'20px' }}
};
```
