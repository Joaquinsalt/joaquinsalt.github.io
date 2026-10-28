import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'
import Home from './pages/Home.tsx'

const Placeholder = ({ title }: { title: string }) => (
  <main className="page"><h1>{title}</h1><p>Coming soon.</p></main>
)
 
const pages = [
  ['about', 'About Me and Goals'],
  ['experience', 'Internships and Work Experience'],
  ['research', 'UTRGV Research'],
  ['hunch', 'NASA HUNCH'],
  ['projects', 'Projects and Technical Skills'],
  ['resume', 'Resume and Credentials'],
  ['activities', 'Activities, Leadership and Service'],
  ['contact', 'Contact'],
]
 
export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        {pages.map(([path, title]) => (
          <Route key={path} path={`/${path}`} element={<Placeholder title={title} />} />
        ))}
      </Routes>
    </>
  )
}
 