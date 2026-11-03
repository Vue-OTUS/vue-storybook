import type { Meta, StoryObj } from '@storybook/vue3-vite'

import Chart from './QChart.vue'

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta = {
  component: Chart,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object', description: 'type' },
  },
  args: {
    data: [
      {
        month: 'January',
        desktop: 186,
        mobile: 80,
      },
      {
        month: 'February',
        desktop: 305,
        mobile: 200,
      },
      {
        month: 'March',
        desktop: 237,
        mobile: 120,
      },
      {
        month: 'April',
        desktop: 73,
        mobile: 190,
      },
      {
        month: 'May',
        desktop: 209,
        mobile: 130,
      },
      {
        month: 'June',
        desktop: 214,
        mobile: 140,
      },
    ],
  },
} satisfies Meta<typeof Chart>

export default meta

type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {},
}
