import { Button } from '../components/Button/Button'
import { useNavigate } from 'react-router-dom'

export default function ButtonPage() {
  const navigate = useNavigate()

  return (
    <div className="p-6 space-y-6">
      <Button onClick={() => navigate('/')} variant="ghost" size="sm">
        ← Back to Home
      </Button>
      <h1 className="text-2xl font-bold">Button</h1>
      <p className="text-gray-700 max-w-prose">
        The <code>Button</code> component supports accessible keyboard interaction, ARIA attributes,
        and visually distinct styles for different states. It is built to meet WCAG AA contrast
        requirements and provides full support for screen readers.
      </p>

      <h2 className="text-xl font-semibold">Examples</h2>
      <div className="space-x-4">
        <Button>Default</Button>
        <Button variant="primary" size="lg">
          Primary
        </Button>
        <Button variant="secondary" size="sm">
          Secondary
        </Button>
        <Button variant="ghost">Ghost</Button>
        <Button disabled>Disabled</Button>
        <Button
          variant="custom"
          className="bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500"
        >
          Custom Red
        </Button>
      </div>

      <h2 className="text-xl font-semibold mt-8">Usage</h2>
      <pre className="bg-gray-100 p-4 rounded text-sm overflow-x-auto">
        {`import { Button } from './components/Button'

<Button>Default</Button>
<Button variant="primary">Primary</Button>
<Button variant="secondary" size="sm">Small Secondary</Button>
<Button variant="ghost" disabled>Ghost Disabled</Button>
<Button disabled>Disabled</Button>
<Button variant="custom" className="bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500">Custom Red</Button>`}
      </pre>

      <h2 className="text-xl font-semibold mt-8">Props</h2>
      <div className="overflow-auto">
        <table className="min-w-full text-left text-sm border border-gray-300">
          <thead className="bg-gray-100 text-gray-800">
            <tr>
              <th className="p-2 border-b">Prop</th>
              <th className="p-2 border-b">Type</th>
              <th className="p-2 border-b">Description</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            <tr>
              <td className="p-2 border-b">children</td>
              <td className="p-2 border-b">ReactNode</td>
              <td className="p-2 border-b">Content inside the button (text, icon, etc)</td>
            </tr>
            <tr>
              <td className="p-2 border-b">onClick</td>
              <td className="p-2 border-b">() =&gt; void</td>
              <td className="p-2 border-b">Click handler</td>
            </tr>
            <tr>
              <td className="p-2 border-b">disabled</td>
              <td className="p-2 border-b">boolean</td>
              <td className="p-2 border-b">Disables the button</td>
            </tr>
            <tr>
              <td className="p-2 border-b">variant</td>
              <td className="p-2 border-b">"primary" | "secondary" | "ghost" | "custom"</td>
              <td className="p-2 border-b">
                Visual style preset. Use "custom" with className to override completely.
              </td>
            </tr>
            <tr>
              <td className="p-2 border-b">size</td>
              <td className="p-2 border-b">"sm" | "md" | "lg"</td>
              <td className="p-2 border-b">Button size (padding, font)</td>
            </tr>
            <tr>
              <td className="p-2 border-b">type</td>
              <td className="p-2 border-b">"button" | "submit" | "reset"</td>
              <td className="p-2 border-b">HTML button type</td>
            </tr>
            <tr>
              <td className="p-2 border-b">ariaLabel</td>
              <td className="p-2 border-b">string</td>
              <td className="p-2 border-b">Accessible name when no visible text</td>
            </tr>
            <tr>
              <td className="p-2 border-b">ariaPressed</td>
              <td className="p-2 border-b">boolean</td>
              <td className="p-2 border-b">Indicates toggle state</td>
            </tr>
            <tr>
              <td className="p-2 border-b">ariaExpanded</td>
              <td className="p-2 border-b">boolean</td>
              <td className="p-2 border-b">Indicates expandable content state</td>
            </tr>
            <tr>
              <td className="p-2 border-b">className</td>
              <td className="p-2 border-b">string</td>
              <td className="p-2 border-b">Override styles with custom Tailwind classes</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
