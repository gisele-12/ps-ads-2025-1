import { Routes, Route } from 'react-router-dom'

import AuthGuard from './AuthGuard'

import routes from './routes'

export default function AppRoutes() {
  return (
    <Routes>
      {
        routes.map(route => {
          let element
<<<<<<< HEAD
          if(route.authLevel > 0) {
=======
          if(route.userLevel > 0) {
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
            element = <AuthGuard userLevel={route.userLevel}>
              {route.element}
            </AuthGuard>
          }
          else element = route.element
<<<<<<< HEAD
=======
          
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
          return <Route 
            key={route.route} 
            path={route.route}
            element={element}
          />
        })
      }
    </Routes>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
