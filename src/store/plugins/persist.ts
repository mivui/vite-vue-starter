import { PiniaPluginContext } from 'pinia';

const getCache = (value?: string) => {
  if (value === 'null' || value === 'undefined') return value;
  return JSON.parse(<string>value);
};

const setState = (value?: unknown): string => {
  if (value === null) return 'null';
  if (value === undefined) return 'undefined';
  return JSON.stringify(value);
};

export function persistPlugin(stores?: string[]) {
  return (context: PiniaPluginContext) => {
    if (stores && stores.length > 0) {
      const { store } = context;
      if (stores.includes(store.$id)) {
        const storage = localStorage.getItem(store.$id);
        if (storage) store.$state = getCache(storage);
        else localStorage.setItem(store.$id, setState(store.$state));
        store.$subscribe((mutation, state) => {
          localStorage.setItem(store.$id, JSON.stringify(state));
        });
      }
    }
  };
}
