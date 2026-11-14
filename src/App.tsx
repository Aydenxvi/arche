import { Suspense, lazy } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'

const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const Studio = lazy(() => import('./pages/Studio'))
const Expertise = lazy(() => import('./pages/Expertise'))
const Journal = lazy(() => import('./pages/Journal'))
const JournalArticle = lazy(() => import('./pages/JournalArticle'))
const Contact = lazy(() => import('./pages/Contact'))
const NotFound = lazy(() => import('./pages/NotFound'))
const ImageLibrary = lazy(() => import('./pages/ImageLibrary'))

function RouteFallback() {
  return (
    <div className="flex min-h-[70svh] items-center justify-center" role="status" aria-live="polite">
      <span className="eyebrow animate-pulse opacity-40">Loading</span>
    </div>
  )
}

function withSuspense(element: React.ReactNode) {
  return <Suspense fallback={<RouteFallback />}>{element}</Suspense>
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/projects', element: withSuspense(<Projects />) },
      { path: '/projects/:slug', element: withSuspense(<ProjectDetail />) },
      { path: '/studio', element: withSuspense(<Studio />) },
      { path: '/expertise', element: withSuspense(<Expertise />) },
      { path: '/journal', element: withSuspense(<Journal />) },
      { path: '/journal/:slug', element: withSuspense(<JournalArticle />) },
      { path: '/image-library', element: withSuspense(<ImageLibrary />) },
      { path: '/contact', element: withSuspense(<Contact />) },
      { path: '*', element: withSuspense(<NotFound />) },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
