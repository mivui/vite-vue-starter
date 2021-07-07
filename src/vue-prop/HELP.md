```ts
import { define } from '@/vue-prop';

const props = {
  name: define.stringNumber.value('123').trueProp,
  //{type:[String,Number],required:true,default:123}
  test: define.string.prop,
  //{type:String}
  titles: define.array<unknown>().verify((value) => value.length > 0).prop,
  //{type:Array as PropType<Array<unknown>>,validator:{(value) => value.length > 0}}
  title: define.func<() => void>().prop,
  //{type:Function as PropType<()=>void>}
  content: define.vueNode.prop,
  //{type:[Object,String] as PropType<JSX.Element|null|string>}
  style: define.css.value({ height:'20px' }).prop,
  //{type: Object as PropType<CSSProperties>,default:{ height:'20px' }}
};
```
