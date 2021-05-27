import { VNodeChild } from 'vue';
import { HTMLAttributes } from '@vue/runtime-dom';

export type VueNode = VNodeChild | JSX.Element;

export interface VueSlots<T = any> {
  [name: string]: (payload?: T) => VueNode;
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
  vHtml?: VueNode;
  vSlots?: VueSlots;
  innerHTML?: string | JSX.Element;
}

declare module 'vue' {
  interface ComponentCustomProps extends JsxComponentCustomProps {}
}
