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
<<<<<<< HEAD
          if(route.authLevel > 0) {
=======
          if(route.userLevel > 0) {
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
=======
          if(route.userLevel > 0) {
>>>>>>> 25c66082985955ca47a6377c0106791540ed057b
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
<<<<<<< HEAD
}
=======
}
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
=======
}
>>>>>>> 25c66082985955ca47a6377c0106791540ed057b
