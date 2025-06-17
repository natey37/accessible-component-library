import type { Meta, StoryObj } from '@storybook/react'
import { Button } from './Button'
import { useState } from 'react'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Click me',
    variant: 'primary',
    size: 'md',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary', 'ghost', 'custom'],
    },
    size: {
      control: { type: 'radio' },
      options: ['sm', 'md', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Cancel',
  },
}

export const Large: Story = {
  args: {
    size: 'lg',
    children: 'Submit',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}

export const Custom: Story = {
  args: {
    variant: 'custom',
    className:
      'bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500',
    children: 'Custom Red',
  },
}

export const ToggleButton: Story = {
  render: () => {
    const [pressed, setPressed] = useState(false)
    return (
      <Button ariaPressed={pressed} onClick={() => setPressed(!pressed)} variant="primary">
        {pressed ? 'Pressed On' : 'Pressed Off'}
      </Button>
    )
  },
}

export const ExpandableButton: Story = {
  render: () => {
    const [expanded, setExpanded] = useState(false)
    return (
      <Button ariaExpanded={expanded} onClick={() => setExpanded(!expanded)} variant="secondary">
        {expanded ? 'Collapse Details' : 'Expand Details'}
      </Button>
    )
  },
}
