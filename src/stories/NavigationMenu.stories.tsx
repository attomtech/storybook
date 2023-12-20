import { NavigationMenu, NavigationMenuProps } from '@attomtech/react'
import { Meta } from '@storybook/react'
import { StoryProps } from '@storybook/blocks'

export default {
  title: 'Surfaces/NavigationMenu',
  component: NavigationMenu,
  args: {
    menu: [
      {
        titulo: 'Menu 1',
        layout: 'one',
        submenu: [
          {
            titulo: 'Submenu 1',
            href: '/submenu1'
          },
          {
            titulo: 'Submenu 2',
            descricao: 'Descricao 2',
            href: '/submenu2'
          }
        ]
      },
      {
        titulo: 'Menu 2',
        href: '/menu2'
      },
      {
        titulo: 'Menu 3',
        layout: 'two',
        submenu: [
          {
            titulo: 'Submenu 1',
            href: '/menu3/submenu1'
          },
          {
            titulo: 'Submenu 2',
            descricao: 'Descrição Submenu 2',
            href: '/menu3/submenu2'
          },
          {
            titulo: 'Submenu 3',
            descricao: 'Descrição Submenu 3',
            href: '/menu3/submenu3'
          },
          {
            titulo: 'Submenu 4',
            descricao: 'Descrição Submenu 3',
            href: '/menu3/submenu3'
          },
          {
            titulo: 'Submenu 5',
            descricao: 'Descrição Submenu 3',
            href: '/menu3/submenu3'
          },
          {
            titulo: 'Submenu 6',
            descricao: 'Descrição Submenu 3',
            href: '/menu3/submenu3'
          }
        ]
      }
    ],
    responsiveButtonColor: 'black'
  },
  argTypes: {
    responsiveButtonColor: {
      control: {
        type: 'string'
      }
    }
  },
  decorators: [
    (Story: any) => {
      return Story()
    }
  ]
} as Meta<NavigationMenuProps>

export const Default: StoryProps = {}
