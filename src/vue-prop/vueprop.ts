import { PropType } from 'vue';

export interface VuePropType<T> {
  type: PropType<T>;
}

export type RequiredPropType<T> = VuePropType<T> & { required: true };

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
    return this as unknown as RequiredPropType<T>;
  }

  value(type: PropConstructorType | PropConstructorType[], value?: T) {
    this.type = type;
    if (value !== undefined) this.default = value;
    return this;
  }

  get() {
    return this as unknown as VuePropType<T>;
  }
}
