import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo quaerat suscipit quam expedita ducimus ipsam cumque quod sint obcaecati iste adipisci praesentium maxime excepturi enim saepe, aperiam sed aliquam culpa placeat, quibusdam minima. Laboriosam assumenda quia ullam ut odit ipsam?',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
