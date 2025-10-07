import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';

const meta: Meta = {
  title: 'Atoms/Button',
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'danger', 'success'],
      description: 'Button variant style',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Button size',
    },
    text: {
      control: 'text',
      description: 'Button text content',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
    loading: {
      control: 'boolean',
      description: 'Loading state',
    },
    rounded: {
      control: 'boolean',
      description: 'Rounded corners',
    },
    block: {
      control: 'boolean',
      description: 'Full width',
    },
  },
};

export default meta;
type Story = StoryObj;

export const Primary: Story = {
  args: {
    variant: 'primary',
    size: 'medium',
    text: 'Primary Button',
    disabled: false,
    loading: false,
    rounded: false,
    block: false,
  },
  render: (args) => html`
    <button
      class="rb-button rb-button--${args.variant} rb-button--${args.size} ${args.rounded
        ? 'rb-button--rounded'
        : ''} ${args.block ? 'rb-button--block' : ''} ${args.loading ? 'rb-button--loading' : ''}"
      ?disabled=${args.disabled}
    >
      ${args.text}
    </button>
  `,
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    size: 'medium',
    text: 'Secondary Button',
    disabled: false,
  },
  render: Primary.render,
};

export const Tertiary: Story = {
  args: {
    variant: 'tertiary',
    size: 'medium',
    text: 'Tertiary Button',
    disabled: false,
  },
  render: Primary.render,
};

export const AllSizes: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; align-items: center; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary rb-button--small">Small</button>
      <button class="rb-button rb-button--primary rb-button--medium">Medium</button>
      <button class="rb-button rb-button--primary rb-button--large">Large</button>
    </div>
  `,
};

export const AllVariants: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary">Primary</button>
      <button class="rb-button rb-button--secondary">Secondary</button>
      <button class="rb-button rb-button--tertiary">Tertiary</button>
      <button class="rb-button rb-button--quaternary">Quaternary</button>
      <button class="rb-button rb-button--quinary">Quinary</button>
      <button class="rb-button rb-button--danger">Danger</button>
      <button class="rb-button rb-button--success">Success</button>
    </div>
  `,
};

export const Loading: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary rb-button--loading">Loading...</button>
      <button class="rb-button rb-button--secondary rb-button--loading">Loading...</button>
      <button class="rb-button rb-button--tertiary rb-button--loading">Loading...</button>
    </div>
  `,
};

export const Disabled: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary" disabled>Disabled</button>
      <button class="rb-button rb-button--secondary" disabled>Disabled</button>
      <button class="rb-button rb-button--tertiary" disabled>Disabled</button>
    </div>
  `,
};

export const Rounded: Story = {
  render: () => html`
    <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
      <button class="rb-button rb-button--primary rb-button--rounded">Rounded</button>
      <button class="rb-button rb-button--secondary rb-button--rounded">Rounded</button>
    </div>
  `,
};

export const Block: Story = {
  render: () => html`
    <div style="display: flex; flex-direction: column; gap: 1rem; max-width: 400px;">
      <button class="rb-button rb-button--primary rb-button--block">Block Button</button>
      <button class="rb-button rb-button--secondary rb-button--block">Block Button</button>
    </div>
  `,
};
