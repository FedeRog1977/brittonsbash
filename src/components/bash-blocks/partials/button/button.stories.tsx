import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from './button.component';

const meta = {
    title: 'Partials / Button',
    component: ButtonComponent,
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'clear', 'solid', 'inverse'],
        },
    },
} as Meta<typeof ButtonComponent>;

export default meta;

export const Button: StoryObj<typeof meta> = {
    args: {
        variant: 'default',
        content: 'Hello world',
    },
    // render: (args) => {<ButtonComponent {...args}/>}
};
