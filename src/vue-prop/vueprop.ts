import { PropType } from 'vue';

export interface AllPropType<T> {
  type: PropType<T>;
  required: true;
}

export type ExcludeRequired<T> = {
  [P in keyof T as Exclude<P, 'required'>]-?: T[P];
};

export type AnyPropType<T> = ExcludeRequired<AllPropType<T>>;

export type PropConstructorType =
  | StringConstructor
  | NumberConstructor
  | BooleanConstructor
  | DateConstructor
  | BigIntConstructor
  | SymbolConstructor
  | ObjectConstructor
  | ArrayConstructor
  | FunctionConstructor;

export default class VueProp<T> {
  private type?: unknown;

  private required?: boolean;

  private default?: unknown;

  true() {
    this.required = true;
    return this as unknown as AllPropType<T>;
  }

  value(type: PropConstructorType | PropConstructorType[], value?: T) {
    this.type = type;
    if (value !== undefined) this.default = value;
    return this;
  }

  get() {
    return this as unknown as AnyPropType<T>;
  }
}
