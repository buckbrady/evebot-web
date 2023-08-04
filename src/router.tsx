import { createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.tsx'
import SignIn from './pages/signin'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: ''
      },
      {
        path: 'dashboard'
      }
    ]
  },
  {
    path: '/signin',
    element: <SignIn />
  }
])

export { router }
