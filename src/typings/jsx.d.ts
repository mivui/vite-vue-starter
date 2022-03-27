import { VNode } from 'vue';

export declare interface VueSlots<T = any> {
  [name: string]: (payload: T) => VNode | null;
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
  | Record<string, any>[];

declare interface JsxComponentCustomProps {
  vShow?: boolean;
  vSlots?: VueSlots;
  vModel?: VueModel;
  vModels?: VueModel[];
  vHtml?: string | VNode | null;
}

declare module 'vue' {
  interface HTMLAttributes extends JsxComponentCustomProps {}

  interface ComponentCustomProps extends JsxComponentCustomProps {}
}
