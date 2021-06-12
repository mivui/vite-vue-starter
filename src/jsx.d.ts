import { HTMLAttributes } from '@vue/runtime-dom';

export interface VueSlots<T = any> {
  [name: string]: (payload?: T) => JSX.Element;
}

export declare type VueModel =
  | string
  | number
  | boolean
  | bigint
  | null
  | undefined
  | symbol
  | Record<string, unknown>
  | [unknown, string];

interface JsxComponentCustomProps extends Omit<HTMLAttributes, 'innerHTML'> {
  vShow?: boolean;
  vSlots?: VueSlots;
  vModel?: VueModel;
  vModels?: VueModel[];
  vHtml?: string | JSX.Element;
  innerHTML?: string | JSX.Element;
}

declare module 'vue' {
  interface InputHTMLAttributes extends JsxComponentCustomProps {}

  interface SelectHTMLAttributes extends JsxComponentCustomProps {}

  interface TextareaHTMLAttributes extends JsxComponentCustomProps {}

  interface ComponentCustomProps extends JsxComponentCustomProps {}
}
