```ts
import vueProp from '@/vue-prop';

const props = {
  name: vueProp.stringNumber.define('123').requiredProp,
  //{type:[String,Number],required:true,default:123}
  test: vueProp.string.get,
  //{type:[String]}
  title: vueProp.func<() => void>().get,
  //{type:Function as PropType<()=>void>}
  content: vueProp.vueNode.get,
  //{type:[Object,String] as PropType<JSX.Element|null|string>}
  style: vueProp.css.define({ height:'20px' }).get,
  //{type:[Object] as PropType<CSSProperties>,default:{ height:'20px' }}
};
```
