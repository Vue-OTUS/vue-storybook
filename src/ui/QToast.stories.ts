import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from './QButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: Button,
  render(args) {
    return {
      setup() {
        const toast = useToast()

        function show() {
          toast.add({
            title: args.title,
            description: args.description,
            color: args.color,
          })
        }

        return { show }
      },
      components: { UButton: Button },
      template: `<UButton @click="show" color="secondary">show toast</UButton>`,
    }
  },
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    color: { control: 'select', options: ['primary', 'secondary', 'error'] },
  },
  args: {
    title: 'Toast title',
    color: 'primary',
  },
} satisfies Meta<{ title: string; description?: string; color: 'primary' | 'secondary' | 'error' }>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const WithDescription: Story = {
  args: {
    title: 'Toast title',
    color: 'primary',
    description: 'description',
  },
}

export const WithError: Story = {
  args: {
    title: 'Toast title',
    color: 'error',
  },
}
