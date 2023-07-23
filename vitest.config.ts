import { defineConfig, mergeConfig } from 'vitest/config';
import type { UserConfig } from 'vitest';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      globals: true,
      environment: 'happy-dom',
      transformMode: {
        web: [/\.(vue|[tj]s|[tj]sx)$/],
      },
    },
  }) as UserConfig,
);
