import { PropType } from 'vue';

export interface VueProps<T> {
  type: T;
  required?: boolean;
}

const stringProp = { type: String, required: true };

const numberProp = { type: Number, required: true };

const booleanProp = { type: Boolean, required: true };

const symbolProp = { type: Symbol, required: true };

const dateProp = { type: Date, required: true };

const jsxProp = [String, Object] as PropType<string | JSX.Element | null>;

const objectProp = <T = Record<string, unknown>>(): VueProps<PropType<T>> => {
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
  objectProp,
  arrayProp,
  functionProp,
};
