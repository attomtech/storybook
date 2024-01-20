import type { Meta, StoryObj } from '@storybook/react'
import { Box, Checkbox, CheckboxProps, Text } from '@attomtech/react'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    variant: 'primary'
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
        <Box
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '8px',
            alignItems: 'center'
          }}
        >
          {Story()}
          <Text>Accept terms of use</Text>
        </Box>
      )
    }
  ]
} as Meta<CheckboxProps>

export const Primary: StoryObj<CheckboxProps> = {}
