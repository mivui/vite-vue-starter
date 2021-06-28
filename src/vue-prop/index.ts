import { CSSProperties } from 'vue';
import { VueProp } from './vueprop';

export function string(value?: string) {
  return new VueProp<string>(String).value(value);
}

export function number(value?: number) {
  return new VueProp<number>(Number).value(value);
}

export function bigint(value?: bigint) {
  return new VueProp<bigint>(BigInt).value(value);
}

export function stringNumber(value?: number | string) {
  return new VueProp<number | string>([Number, String]).value(value);
}

export function boolean(value?: boolean) {
  return new VueProp<boolean>(Boolean).value(value);
}

export function symbol(value?: symbol) {
  return new VueProp<symbol>(Symbol).value(value);
}

export function date(value?: Date) {
  return new VueProp<Date>(Date).value(value);
}

export function object<T>(value?: T) {
  return new VueProp<T>(Object).value(value);
}

export function array<T>(value?: Array<T>) {
  return new VueProp<Array<T>>(Array).value(value);
}

export function vueNode(value?: string) {
  return new VueProp<JSX.Element | string | null>([String, Object])
    .value(value)
    .get();
}

export function func<T = () => void>() {
  return new VueProp<T>(Function).value().get();
}

export function css() {
  return new VueProp<CSSProperties>(Object).value().get();
}
