import { Prop as VueProp } from 'vue';

type DefaultType<T> =
  | T
  | (() => T | null | undefined)
  | null
  | undefined
  | Record<string, unknown>;

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

export type VuePropType = PropConstructor | PropConstructor[] | true | null;

export class Prop<T> {
  private type?: VuePropType;

  private required?: boolean;

  private default?: DefaultType<T>;

  validator?(value: unknown): boolean;

  constructor(type: VuePropType) {
    this.type = type;
  }

  value(value?: T) {
    this.default = value;
    return this;
  }

  verify(validator: (value: T) => boolean) {
    this.validator = validator;
    return this;
  }

  get isRequired() {
    this.required = true;
    return this as unknown as VueProp<T> & { required: true };
  }

  get prop() {
    return this as unknown as VueProp<T> & { required: false };
  }
}

export function useProp<T>(type: VuePropType) {
  return new Prop<T>(type);
}
