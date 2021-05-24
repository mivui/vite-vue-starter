import { VNodeChild } from 'vue';
import { HTMLAttributes } from '@vue/runtime-dom';

export type VueNode = VNodeChild | JSX.Element;

export interface VueSlots<T = any> {
  [name: string]: (payload?: T) => VueNode;
}

interface JsxComponentCustomProps extends Omit<HTMLAttributes, 'innerHTML'> {
  vModel?: unknown;
  vModels?: unknown[];
  vCustom?: unknown[];
  vShow?: boolean;
  vHtml?: VueNode;
  vSlots?: VueSlots;
  innerHTML?: string | JSX.Element;
}

declare module 'vue' {
  interface ComponentCustomProps extends JsxComponentCustomProps {}
}
