import { PropType as VuePropType } from 'vue';

export type PropType<T> = {
  type: VuePropType<T>;
};

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

  requiredProp() {
    this.required = true;
    return this as unknown as PropType<T> & { required: true };
  }
}
