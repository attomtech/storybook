import { Box, Select, SelectProps } from '@attomtech/react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    disabled: true
  },
  argTypes: {
    variant: {
      options: ['primary', 'success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    }
  },
  decorators: [
    (Story: any) => {
      return (
        <Box style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<SelectProps>

export const Primary: StoryObj<SelectProps> = {
  args: {
    value: 'abc',
    onValueChange: () => {},
    options: [
      {
        value: 'abc',
        label: 'ABC'
      },
      {
        value: 'def',
        label: 'DEF'
      }
    ]
  }
}
