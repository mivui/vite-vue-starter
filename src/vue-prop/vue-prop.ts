import { PropType } from 'vue';

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

export class VueProp<T> {
  type: VuePropType;

  required?: boolean;

  default?: DefaultType<T>;

  validator?(value: unknown): boolean;

  constructor(type: VuePropType) {
    this.type = type;
  }

  define(value?: T) {
    this.default = value;
    return this;
  }

  verify(validator: (value: T) => boolean) {
    this.validator = validator;
    return this;
  }

  get trueProp() {
    this.required = true;
    return this as unknown as PropType<T> & { required: true };
  }

  get prop() {
    return this as unknown as PropType<T> & { required: false };
  }
}

export function useProp<T>(type: VuePropType) {
  return new VueProp<T>(type);
}
