import type { Meta, StoryObj } from '@storybook/react';
// import { fn } from '@storybook/test';
import { Typography as TypographyComponent } from './typography';

const meta = {
  title: 'Partials / Typography',
  component: TypographyComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    // variant: {
    //     control: 'select',
    //     options: ['default', 'clear', 'solid', 'inverse'],
    // },
    children: { control: 'text' },
  },
  args: {
    // variant: 'default',
    // content: 'Hello world',
    // func: fn(),
    variant: 't1',
    fontFamily: 'sansSerif',
    children: 'Hello world',
    color: 'darkerGrey',
    inline: false,
    boldFace: false,
    italicize: false,
    smallCaps: false,
    textDecoration: 'none',
    // link: { url: './' },
    shadow: false,
    textAlign: 'inherit',
  },
} as Meta<typeof TypographyComponent>;

export const Typography: StoryObj<typeof meta> = {
  args: {
    children: 'Hello world',
  },
};

export default meta;
