import { defineConfigWithVueTs, vueTsConfigs } from '@vue/eslint-config-typescript';
import eslintPluginPerfectionist from 'eslint-plugin-perfectionist';
import pluginVue from 'eslint-plugin-vue';

export default defineConfigWithVueTs(
  {
    files: ['**/*.{ts,mts,tsx,vue}'],
    name: 'app/files-to-lint',
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
