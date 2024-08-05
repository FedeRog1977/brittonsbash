import type { Meta, StoryObj } from '@storybook/react';
import { Typography as TypographyComponent } from '../components/bash-blocks';

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
    children: "Typography ^{1} _{2} ``hello''",
    color: 'white',
    boldFace: false,
    italicize: false,
    smallCaps: false,
    textDecoration: 'none',
    shadow: false,
    fontFamily: 'serif',
    textAlign: 'left',
    paragraphMargins: true,
    markdown: true,
  },
} as Meta<typeof TypographyComponent>;

export const Typography: StoryObj<typeof meta> = {
  args: {},
  render: ({ ...args }) => (
    <div style={{ display: 'flex-column' }}>
      <TypographyComponent {...args} />
      <TypographyComponent {...args} variant="t2" />
      <TypographyComponent {...args} variant="h1" />
      <TypographyComponent {...args} variant="h2" />
      <TypographyComponent {...args} variant="h3" />
      <TypographyComponent {...args} variant="h4" />
      <TypographyComponent {...args} variant="body" />
      <TypographyComponent {...args} variant="caption" />
      <TypographyComponent {...args} variant="footnote" />
      <TypographyComponent {...args} variant="tiny" />
    </div>
  ),
};

export default meta;
