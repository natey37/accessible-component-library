export default {
  title: 'Example/Button',
  component: ({ label }: { label: string }) => <button>{label}</button>,
}

export const Primary = {
  args: {
    label: 'Click Me',
  },
}
