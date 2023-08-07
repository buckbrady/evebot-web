import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.tsx'
import SignIn from './pages/signin'
import DashboardPage from './pages/dashboard'
import LandingPage from './pages/landing'
import CharactersPage from './pages/characters'
import StatusPage from './pages/status'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <DashboardPage />
      },
      {
        path: 'characters',
        element: <CharactersPage />
      },
      {
        path: 'about',
        element: <LandingPage />
      },
      {
        path: 'status',
        element: <StatusPage />
      }
    ]
  },
  {
    path: '/signin',
    element: <SignIn />
  }
])

export { router }
