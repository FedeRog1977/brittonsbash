import type { Preview } from '@storybook/react';
import '../src/components/reference/styles/_global.scss';
import '../src/components/reference/styles/_fonts.scss';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      expanded: true,
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
