import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@arias-ui/react'

export default {
  title: 'Form/Box',
  tags: ['autodocs'],
  component: Box,
  args: {
    children: <Text>Testando o elemento box</Text>,
  },
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}
