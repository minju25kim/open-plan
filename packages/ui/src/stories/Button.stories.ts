import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from '../button';

const meta = {
  title: 'Open Plan/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '다음',
    onClick: fn(),
  },
};

export const HoverPressed: Story = {
  args: {
    children: '다음',
    className: 'hover:bg-[rgba(17,17,17,0.8)] bg-[rgba(17,17,17,0.8)]',
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: '호버/프레스 상태를 시각적으로 확인할 수 있도록 강제로 적용한 버튼입니다.'
      }
    }
  }
};
