```ts
import vueProp from '@/vue-prop';

const props = {
  name: vueProp.stringNumber.define('123').mustProp,
  //{type:[String,Number],required:true,default:123}
  test: vueProp.string.prop,
  //{type:[String]}
  title: vueProp.func<() => void>().prop,
  //{type:Function as PropType<()=>void>}
  content: vueProp.vueNode.prop,
  //{type:[Object,String] as PropType<JSX.Element|null|string>}
  style: vueProp.css.define({ height:'20px' }).prop,
  //{type:[Object] as PropType<CSSProperties>,default:{ height:'20px' }}
};
```
