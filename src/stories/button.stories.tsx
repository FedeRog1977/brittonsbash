import type { Meta, StoryObj } from '@storybook/react';
import { Button as ButtonComponent } from '../components';
import { fn } from '@storybook/test';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ReactElement, useState } from 'react';

const meta = {
  title: 'Partials / Button',
  component: ButtonComponent,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'clear', 'solid', 'inverse'],
    },
    typeVariant: {
      control: 'select',
      options: ['t1', 't2', 'h1', 'h2', 'h3', 'h4', 'body', 'caption', 'footnote', 'tiny'],
    },
    typeColor: {
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
    content: { control: 'text' },
    subContent: { control: 'text' },
    subContentTop: { control: false },
    icon: { control: false },
    value: { control: 'text' },
    func: { control: false },
    link: { url: { control: 'text' } },
    space: { control: 'boolean' },
    width: { control: 'select' },
    padding: { control: 'select' },
    transition: { control: 'boolean' },
  },
  args: {
    typeVariant: 'body',
    typeColor: 'white',
    content: 'Button',
    func: fn(),
    width: 'default',
    padding: 'coarse',
  },
} as Meta<typeof ButtonComponent>;

export const Default: StoryObj<typeof meta> = {
  args: { variant: 'default' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponent {...args} />
      <ButtonComponent {...args} subContentTop />
    </div>
  ),
};

export const Solid: StoryObj<typeof meta> = {
  args: { variant: 'solid' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponent {...args} />
      <ButtonComponent {...args} subContentTop />
    </div>
  ),
};

export const Clear: StoryObj<typeof meta> = {
  args: { variant: 'clear' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponent {...args} />
      <ButtonComponent {...args} subContentTop />
    </div>
  ),
};

export const Inverse: StoryObj<typeof meta> = {
  args: { variant: 'inverse' },
  render: ({ ...args }) => (
    <div style={{ display: 'flex', columnGap: '20px' }}>
      <ButtonComponent {...args} />
      <ButtonComponent {...args} subContentTop />
    </div>
  ),
};

export const Spaced: StoryObj<typeof meta> = {
  args: {
    variant: 'default',
    width: 'full',
  },
  render: ({ ...args }) => {
    const [handleIcon, setHandleIcon] = useState(<FontAwesomeIcon icon={faChevronDown} />);

    return (
      <div style={{ width: '1000px' }}>
        <ButtonComponent
          {...args}
          func={() => setHandleIcon(<FontAwesomeIcon icon={faChevronUp} />)}
          icon={handleIcon}
        />
      </div>
    );
  },
};

export default meta;
