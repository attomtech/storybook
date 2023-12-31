import type { Meta, StoryObj } from '@storybook/react'
import { Box, Text, TextInput, TextInputProps } from '@attomtech/react'

export default {
  title: 'Form/Text Input',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    variant: 'success',
    padding: 'md'
  },
  argTypes: {
    variant: {
      options: ['primary', 'success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    },
    padding: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    prefix: {
      control: {
        type: 'text'
      }
    }
  },
  decorators: [
    (Story: any) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}
        >
          <Text size="sm">Email address</Text>
          {Story()}
        </Box>
      )
    }
  ]
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
    variant: 'warning'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}

export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username'
  }
}
