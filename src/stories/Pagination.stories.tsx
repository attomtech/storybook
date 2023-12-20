import { Pagination, PaginationProps } from '@attomtech/react'
import { Meta } from '@storybook/react'
import { StoryProps } from '@storybook/blocks'

export default {
  title: 'Data display/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args: {
    currentPage: 2,
    pages: 8
  },
  decorators: [
    (Story: any) => {
      return Story()
    }
  ]
} as Meta<PaginationProps>

export const Default: StoryProps = {}
