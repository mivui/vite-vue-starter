import { PropType as VuePropType } from 'vue';

type BasePropType<T> = {
  type: VuePropType<T>;
  required: boolean;
  default: unknown;
};

type ExcludePropType<T> = {
  -readonly [K in keyof T as Exclude<
    K,
    'define' | 'requiredProp' | 'prop'
  >]-?: T[K];
};

export type PropType<T> = ExcludePropType<BasePropType<T>>;

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
