import { Prop as VueProp, PropType } from 'vue';

type DefaultType<T> =
  | T
  | (() => T | null | undefined)
  | null
  | undefined
  | Record<string, unknown>;

export type VuePropType<T> =
  | PropType<T>
  | true
  | null
  | FunctionConstructor
  | BigIntConstructor;

export class Prop<T = any, D = T> {
  readonly type?: VuePropType<T>;

  required?: boolean;

  default?: DefaultType<D>;

  validator?(value: unknown): boolean;

  constructor(type: VuePropType<T>) {
    this.type = type;
  }

  value(value?: D) {
    this.default = value;
    return this;
  }

  verify(validator: (value: T) => boolean) {
    this.validator = validator;
    return this;
  }

  get isRequired() {
    this.required = true;
    return this as VueProp<T> & { required: true };
  }

  get prop() {
    return this as VueProp<T> & { required: false };
  }
}

export function useProp<T>(type: VuePropType<T>) {
  return new Prop<T>(type);
}
