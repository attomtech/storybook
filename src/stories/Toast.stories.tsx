import { Button, Toast, ToastFunctions, ToastProps } from '@attomtech/react'
import { createRef, forwardRef } from 'react'
import { Meta, StoryObj } from '@storybook/react'

export default {
  title: 'Data display/Toast',
  component: Toast,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    position: 'top-right'
  },
  argTypes: {
    variant: {
      options: ['default', 'primary', 'success', 'warning', 'danger'],
      control: {
        type: 'inline-radio'
      }
    },
    position: {
      options: ['top-right', 'top-left', 'bottom-right', 'bottom-left'],
      control: {
        type: 'inline-radio'
      }
    }
  }
} as Meta<ToastProps>

export const Default = (args: any, context: any) => {
  const toastRef = createRef<ToastFunctions>()

  return (
    <>
      <Button
        onClick={() => {
          toastRef.current?.open()
        }}
      >
        Abrir
      </Button>
      <Toast
        title="Título"
        description="Descrição"
        ref={toastRef}
        variant={args.variant}
        position={args.position}
      />
    </>
  )
}
