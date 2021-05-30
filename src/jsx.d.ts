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
  vModel?: VueModel;
  vModels?: VueModel[];
  vShow?: boolean;
  vSlots?: VueSlots;
  vHtml?: string | JSX.Element;
  innerHTML?: string | JSX.Element;
}

declare module 'vue' {
  interface ComponentCustomProps extends JsxComponentCustomProps {}
}
