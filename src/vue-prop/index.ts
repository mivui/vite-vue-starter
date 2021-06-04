import VueProp from './vueprop';

export function string(value?: string) {
  return new VueProp<string>().value(String, value);
}

export function number(value?: number) {
  return new VueProp<number>().value(Number, value);
}

export function bigint(value?: bigint) {
  return new VueProp<bigint>().value(BigInt, value);
}

export function stringNumber(value?: number | string) {
  return new VueProp<number | string>().value([Number, String], value);
}

export function boolean(value?: boolean) {
  return new VueProp<boolean>().value(Boolean, value);
}

export function symbol(value?: symbol) {
  return new VueProp<symbol>().value(Symbol, value);
}

export function date(value?: Date) {
  return new VueProp<Date>().value(Date, value);
}

export function vueNode(value?: string) {
  return new VueProp<JSX.Element | string | null>().value(
    [String, Object],
    value,
  );
}

export function func<T = () => void>() {
  return new VueProp<T>().value(Function).get();
}
