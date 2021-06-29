import { PropType as VuePropType } from 'vue';

type BasePropType<T> = {
  type: VuePropType<T>;
  required: boolean;
};

type ExcludeValue = 'default' | 'true' | 'get' | 'value';

type ExcludePropType<T> = {
  -readonly [K in keyof T as Exclude<K, ExcludeValue>]-?: T[K];
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

  true() {
    this.required = true;
    return this as unknown as PropType<T> & { required: true };
  }

  value(value?: T) {
    if (value !== undefined) this.default = value;
    return this;
  }

  get() {
    return this as unknown as PropType<T>;
  }
}
