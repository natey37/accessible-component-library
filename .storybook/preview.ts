import type { Preview } from '@storybook/react'
import '../src/styles/generated.css'

const preview: Preview = {
  parameters: {
    layout: 'centered',
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      config: {
        rules: [
          { id: 'color-contrast', enabled: true },
          { id: 'region', enabled: true },
        ],
      },
    },
  },
}

export default preview
