import { components } from '../data/components'
import { Link } from 'react-router-dom' // adjust if not using React Router

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Component Library</h1>
      <ul className="grid gap-4">
        {components.map((comp) => (
          <li key={comp.slug} className="border p-4 rounded-xl shadow-sm">
            <h2 className="text-xl font-semibold">{comp.name}</h2>
            <p className="text-gray-600 mb-2">{comp.description}</p>
            <Link to={`/${comp.slug}`} className="text-blue-600 underline hover:text-blue-800">
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
