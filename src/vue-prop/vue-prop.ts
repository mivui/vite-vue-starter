import { PropType } from 'vue';

type PropConstructor =
  | StringConstructor
  | NumberConstructor
  | BooleanConstructor
  | DateConstructor
  | BigIntConstructor
  | SymbolConstructor
  | ObjectConstructor
  | ArrayConstructor
  | FunctionConstructor;

export type PropConstructorType = PropConstructor | PropConstructor[];

export class VueProp<T> {
  private type: PropConstructorType;

  private required?: boolean;

  private default?: unknown;

  constructor(type: PropConstructorType) {
    this.type = type;
  }

  define(value?: T) {
    this.default = value;
    return this;
  }

  prop() {
    return this as unknown as PropType<T>;
  }

  mustProp() {
    this.required = true;
    return this as unknown as PropType<T> & { required: true };
  }
}
