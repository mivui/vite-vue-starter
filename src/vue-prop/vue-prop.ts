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

  get prop() {
    return this as unknown as PropType<T> & ThisType<void>;
  }

  get requiredProp() {
    this.required = true;
    return this as unknown as PropType<T> & { required: true } & ThisType<void>;
  }
}

export function useProp<T>(type: PropConstructorType) {
  return new VueProp<T>(type);
}
