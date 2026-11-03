import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Button from './QButton.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    default: { control: 'text' },
    color: { control: 'select', options: ['primary', 'secondary', 'error'] },
    anyColor: {
      control: 'color',
      description: 'Переписывает значение color и принимает любой цвет',
    },
  },
  args: {
    default: 'Button text',
    color: 'primary',
  },
} satisfies Meta<typeof Button>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}

export const Error: Story = {
  args: {
    default: 'Button with error',
    color: 'error',
  },
}

export const AnyColor: Story = {
  args: {
    anyColor: 'lightcoral',
  },
}
