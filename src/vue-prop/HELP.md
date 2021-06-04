```ts

const props = {
  name: stringNumber('123').true(), //{type:[String,Number],required:true,default:123}
  test: string().get(), //{type:[String]}
  title: method<() => void>(), //{type:Function as PropType<()=>void>}
  content: vueNode(), //{type:[Object,String] as PropType<JSX.Element|null|string>}
};
```
