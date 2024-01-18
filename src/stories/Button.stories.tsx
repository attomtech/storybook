import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@attomtech/react'
import { ArrowRight } from 'phosphor-react'

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false
  },
  argTypes: {
    variant: {
      options: ['primary', 'success', 'warning', 'danger', 'back'],
      control: {
        type: 'inline-radio'
      }
    },
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio'
      }
    },
    disabled: {
      control: {
        type: 'boolean'
      }
    },
    onClick: {
      action: 'clicked'
    }
  }
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'Success'
  }
}

export const Warning: StoryObj<ButtonProps> = {
  args: {
    variant: 'warning',
    children: 'Alert'
  }
}

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Danger'
  }
}

export const Back: StoryObj<ButtonProps> = {
  args: {
    variant: 'back',
    children: 'Cancel'
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight="bold" />
      </>
    )
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true
  }
}
