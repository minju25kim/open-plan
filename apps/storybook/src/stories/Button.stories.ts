import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '@repo/ui/button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'] 
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '다음',
    style: { width: 335 },
    forceState: "default"
  },
};

export const HoveredAndPressed: Story = {
  args: {
    children: '다음',
    forceState: 'hovered',
    style: { width: 335 },
  },
};
