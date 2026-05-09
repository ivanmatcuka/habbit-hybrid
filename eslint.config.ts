import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
  },
  {
    ignores: [
      '.DS_Store',
      'node_modules',
      'coverage',
      'dist',
      'ios',
      'android',
      'tests',

      // local env files
      '.env.local',
      '.env.*.local',

      // Log files
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      'pnpm-debug.log*',

      // Editor directories and files
      '.idea',
      '.vscode',
      '*.suo',
      '*.ntvs*',
      '*.njsproj',
      '*.sln',
      '*.sw?',
    ],
  },
  vueTsConfigs.recommended,
  ...pluginVue.configs['flat/essential'],

  {
    rules: {
      'vue/attributes-order': [
        'error',
        {
          alphabetical: false,
          order: [
            'DEFINITION',
            'LIST_RENDERING',
            'CONDITIONALS',
            'RENDER_MODIFIERS',
            'GLOBAL',
            ['UNIQUE', 'SLOT'],
            'TWO_WAY_BINDING',
            'OTHER_DIRECTIVES',
            'OTHER_ATTR',
            'EVENTS',
            'CONTENT',
          ],
        },
      ],
      'vue/no-deprecated-slot-attribute': ['off'],
    },
  },
  {
    rules: {
      'perfectionist/sort-object-types': [
        'error',
        'error',
        {
          customGroups: [],
          fallbackSort: { type: 'unsorted' },
          groups: [],
          ignoreCase: true,
          newlinesBetween: 'ignore',
          newlinesInside: 'ignore',
          order: 'asc',
          partitionByNewLine: false,
          specialCharacters: 'keep',
          type: 'alphabetical',
          useConfigurationIf: {},
        },
      ],
    },
    ...eslintPluginPerfectionist.configs['recommended-natural'],
  },
);
