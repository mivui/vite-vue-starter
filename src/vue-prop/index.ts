import { CSSProperties } from 'vue';
import { VueProp } from './vue-prop';

export function string(value?: string) {
  return new VueProp<string>(String).define(value);
}

export function number(value?: number) {
  return new VueProp<number>(Number).define(value);
}

export function bigint(value?: bigint) {
  return new VueProp<bigint>(BigInt).define(value);
}

export function stringNumber(value?: number | string) {
  return new VueProp<number | string>([Number, String]).define(value);
}

export function boolean(value?: boolean) {
  return new VueProp<boolean>(Boolean).define(value);
}

export function symbol(value?: symbol) {
  return new VueProp<symbol>(Symbol).define(value);
}

export function date(value?: Date) {
  return new VueProp<Date>(Date).define(value);
}

export function object<T>(value?: T) {
  return new VueProp<T>(Object).define(value);
}

export function array<T>(value?: Array<T>) {
  return new VueProp<Array<T>>(Array).define(value);
}

export function vueNode(value?: string) {
  return new VueProp<JSX.Element | string | null>([String, Object])
    .define(value)
    .prop();
}

export function func<T = () => void>() {
  return new VueProp<T>(Function).prop();
}

export function css(style?: CSSProperties) {
  return new VueProp<CSSProperties>(Object).define(style).prop();
}
