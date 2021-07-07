```ts
import vueProp from '@/vue-prop';

const props = {
  name: vueProp.stringNumber.value('123').trueProp,
  //{type:[String,Number],required:true,default:123}
  test: vueProp.string.prop,
  //{type:String}
  titles: vueProp.array<unknown>().verify((value) => value.length > 0).prop,
  //{type:Array as PropType<Array<unknown>>,validator:{(value) => value.length > 0}}
  title: vueProp.func<() => void>().prop,
  //{type:Function as PropType<()=>void>}
  content: vueProp.vueNode.prop,
  //{type:[Object,String] as PropType<JSX.Element|null|string>}
  style: vueProp.css.value({ height:'20px' }).prop,
  //{type: Object as PropType<CSSProperties>,default:{ height:'20px' }}
};
```
