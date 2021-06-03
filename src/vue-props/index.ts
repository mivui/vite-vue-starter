import { PropType } from 'vue';

export interface VueProps<T> {
  type: T;
  required: true;
}

const stringProp = {
  type: String,
  required: true,
} as VueProps<StringConstructor>;

const stringNumberProp = {
  type: [String, Number],
  required: true,
} as unknown as VueProps<StringConstructor | NumberConstructor>;

const numberProp = {
  type: Number,
  required: true,
} as VueProps<NumberConstructor>;

const booleanProp = {
  type: Boolean,
  required: true,
} as VueProps<BooleanConstructor>;

const symbolProp = {
  type: Symbol,
  required: true,
} as VueProps<SymbolConstructor>;

const dateProp = { type: Date, required: true } as VueProps<DateConstructor>;

const jsxProp = [String, Object] as PropType<string | JSX.Element | null>;

const objectProp = <
  T extends Record<string, unknown> = Record<string, unknown>,
>(): VueProps<PropType<T>> => {
  return { type: Object as PropType<T>, required: true };
};

const arrayProp = <T = Record<string, unknown>>(): VueProps<
  PropType<Array<T>>
> => {
  return { type: Array as PropType<Array<T>>, required: true };
};

const functionProp = <T = () => void>(): PropType<T> => {
  return Function as PropType<T>;
};

export {
  stringProp,
  numberProp,
  booleanProp,
  symbolProp,
  dateProp,
  jsxProp,
  stringNumberProp,
  objectProp,
  arrayProp,
  functionProp,
};
