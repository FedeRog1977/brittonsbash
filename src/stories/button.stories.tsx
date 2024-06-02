import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from '../components/bash-blocks';
import '../components/bash-blocks/reference/styles/_global.scss';
import '../components/bash-blocks/reference/styles/_fonts.scss';

const meta = {
  title: 'Basics / Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: { control: 'select' },
    typeVariant: { control: 'select' },
    // children: { control: 'text' },
    // color: {
    //   control: 'select',
    //   options: [
    //     'black',
    //     'darkerGrey',
    //     'darkGrey',
    //     'mediumGrey',
    //     'lightGrey',
    //     'lighterGrey',
    //     'lightBlue',
    //     'white',
    //     'transparent',
    //   ],
    // },
    // boldFace: { control: 'boolean' },
    // italicize: { control: 'boolean' },
    // smallCaps: { control: 'boolean' },
    // textDecoration: { control: 'select' },
    // shadow: { control: 'boolean' },
    // fontFamily: { control: 'select' },
    // textAlign: {
    //   control: 'select',
    //   options: ['left', 'center', 'right', 'inherit', 'justify'],
    // },
    // paragraphMargins: { control: 'boolean' },
    // markdown: { control: 'boolean' },
  },
  args: {
    variant: 'default',
    typeVariant: 'body',
    typeColor: 'white',
    content: 'Button',
    subContent: undefined,
    subContentTop: undefined,
    icon: undefined,
    value: undefined,
    func: undefined,
    link: undefined,
    space: undefined,
    width: 'default',
    padding: 'coarse',
    transition: undefined,
  },
} as Meta<typeof ButtonComponent>;

export const Button: StoryObj<typeof meta> = {
  args: {},
  render: ({ ...args }) => (
    <div style={{ display: 'inline-flex', columnGap: '20px' }}>
      <ButtonComponent {...args} />
      <ButtonComponent {...args} subContent="Hello" />
    </div>
  ),
};

export default meta;
