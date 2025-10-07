import type { Preview } from '@storybook/web-components';

// Import tokens CSS (default to Jelpit Light)
import '@rb/tokens/dist/jelpit-light.css';
import '@rb/atoms/dist/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  globalTypes: {
    brand: {
      description: 'Brand theme',
      defaultValue: 'jelpit',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'white-label', title: 'White Label' },
          { value: 'jelpit', title: 'Jelpit' },
          { value: 'davivienda', title: 'Davivienda' },
          { value: 'cien-cuadras', title: 'Cien Cuadras' },
          { value: 'doctor-aki', title: 'Doctor Aki' },
          { value: 'seguros-bolivar', title: 'Seguros Bolívar' },
        ],
        dynamicTitle: true,
      },
    },
    theme: {
      description: 'Theme mode',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (story, context) => {
      const brand = context.globals.brand || 'jelpit';
      const theme = context.globals.theme || 'light';

      // Update HTML attributes
      document.documentElement.setAttribute('data-brand', brand);
      document.documentElement.setAttribute('data-theme', theme);

      return story();
    },
  ],
};

export default preview;
