import type { Meta, StoryObj } from '@storybook/react'
import { Button as ButtonComponent } from './button.component'

const meta: Meta<typeof ButtonComponent> = {
    title: 'Partials / Button',
    component: ButtonComponent,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'clear', 'solid', 'inverse'],
        },
    },
}

export default meta

export const Button: StoryObj<typeof ButtonComponent> = {
    args: {
        variant: 'default',
        content: 'Hello world',
    },
}
