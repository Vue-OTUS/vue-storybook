import '../src/assets/css/main.css'
import { type Preview, setup } from '@storybook/vue3-vite'
import ui from '@nuxt/ui/vue-plugin'

import StoryWrapper from './StoryWrapper.vue'

setup((app) => {
  app.use(ui)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo',
    },
  },

  decorators: [
    (story) => {
      return {
        components: { story, UApp: StoryWrapper },
        template: `<UApp><story /></UApp>`,
      }
    },
  ],
}

export default preview
