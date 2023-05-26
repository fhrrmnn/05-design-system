import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@arias-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    size: 'md',
    children:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium eos consectetur assumenda nam nisi, temporibus accusamus alias eaque magni atque excepturi rerum, sint facilis possimus et unde ipsam vel necessitatibus.',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text tag',
    as: 'strong',
  },
}
