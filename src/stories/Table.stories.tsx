import { Table, TableProps } from '@attomtech/react'
import { Meta } from '@storybook/react'
import { StoryProps } from '@storybook/blocks'

export default {
  title: 'Data display/Table',
  component: Table,
  tags: ['autodocs'],
  args: {
    columns: [
      {
        id: 'column1',
        label: 'Coluna 1',
        clickable: true
      },
      {
        id: 'column2',
        label: 'Column 2',
        clickable: false
      },
      {
        id: 'column3',
        label: 'Column 3',
        clickable: true
      }
    ],
    rows: [
      {
        id: 'abc',
        values: [
          {
            text: 'Valor 1',
            label: 'Coluna 1'
          },
          {
            text: 'Valor 2',
            label: 'Coluna 2'
          },
          {
            text: 'Valor 3',
            label: 'Coluna 3'
          }
        ]
      },
      {
        id: 'def',
        values: [
          {
            text: 'Valor 1',
            label: 'Coluna 1'
          },
          {
            text: 'Valor 2',
            label: 'Coluna 2'
          },
          {
            text: 'Valor 3',
            label: 'Coluna 3'
          }
        ],
        edit: false
      },
      {
        id: 'ghi',
        values: [
          {
            text: 'Valor 1',
            label: 'Coluna 1'
          },
          {
            text: 'Valor 2',
            label: 'Coluna 2'
          },
          {
            text: 'Valor 3',
            label: 'Coluna 3'
          }
        ],
        delete: false
      }
    ]
  },
  decorators: [
    (Story: any) => {
      return Story()
    }
  ]
} as Meta<TableProps>

export const Default: StoryProps = {}
