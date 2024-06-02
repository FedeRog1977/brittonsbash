import type { Meta, StoryObj } from '@storybook/react';
import { Typography as TypographyComponent } from '../components/bash-blocks';
import '../components/bash-blocks/reference/styles/_global.scss';
import '../components/bash-blocks/reference/styles/_fonts.scss';

const meta = {
  title: 'Basics / Typography',
  component: TypographyComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'select' },
    children: { control: 'text' },
    color: {
      control: 'select',
      options: [
        'black',
        'darkerGrey',
        'darkGrey',
        'mediumGrey',
        'lightGrey',
        'lighterGrey',
        'lightBlue',
        'white',
        'transparent',
      ],
    },
    boldFace: { control: 'boolean' },
    italicize: { control: 'boolean' },
    smallCaps: { control: 'boolean' },
    textDecoration: { control: 'select' },
    shadow: { control: 'boolean' },
    fontFamily: { control: 'select' },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right', 'inherit', 'justify'],
    },
    paragraphMargins: { control: 'boolean' },
    markdown: { control: 'boolean' },
  },
  args: {
    variant: 't1',
    children: 'Typography',
    color: 'white',
    boldFace: false,
    italicize: false,
    smallCaps: false,
    textDecoration: 'none',
    shadow: false,
    fontFamily: 'serif',
    textAlign: 'left',
    paragraphMargins: false,
    markdown: true,
  },
} as Meta<typeof TypographyComponent>;

export const Typography: StoryObj<typeof meta> = {
  args: {},
  // render: ({ ...args }) => (
  //   <div style={{ display: 'inline' }}>
  //     <TypographyComponent {...args} />
  //     <TypographyComponent {...args} />
  //   </div>
  // ),
};

export default meta;
