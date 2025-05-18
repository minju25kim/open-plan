import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../header';

const meta = {
  title: 'Open Plan/Header',
  component: Header,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Candidate Name',
  },
}; 