<<<<<<< HEAD
import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { feedbackWait } from '../ui/Feedback'
import AuthContext from '../contexts/AuthContext'
import fetchAuth from '../lib/fetchAuth'

export default function AuthGuard({ children, userLevel = 0 }) {
  /*
    userLevel:
    0 ~> rota pode ser acessada mesmo sem usuário autenticado (padrão)
    1 ~> rota exige usuário autenticado para ser acessada
    2 ~> rota exige usuário autenticado e administrador para ser acessada
  */

  const { authState, setAuthState } = React.useContext(AuthContext)
  const {
    authUser
  } = authState

  const [status, setStatus] = React.useState('IDLE')

  const navigate = useNavigate()
  const location = useLocation()

  async function checkAuthUser() {
    /*
      Sempre que se tentar acessar uma nova rota de front-end, esta
      função será executada para consultar o back-end se há um usuário
      autenticado
    */
    setStatus('PROCESSING')
    feedbackWait(true)
    try {
      const user = await fetchAuth.get('/users/me')
      setAuthState({ ...authState, authUser: user })
    }
    catch(error) {
      setAuthState({ ...authState, authUser: null })
      console.error(error)
      navigate('/login', { replace: true })
    }
    finally {
      feedbackWait(false)
      setStatus('DONE')
    }
  }

  // Este useEffect será executado sempre que a rota (location) for alterada
  React.useEffect(() => {
    /*
      Salva a rota atual para posterior redirecionamento (caso a rota atual
      não seja o próprio login)
    */
    if(! location.pathname.includes('login')) {
      setAuthState({ ...authState, redirectTo: location })
    }

    checkAuthUser()
  }, [location])

  if(status === 'PROCESSING') return <></>

  /*
    Se não há usuário autenticado e o nível de acesso (> 0) assim o
    exige, redirecionamos para a página de login
  */
  if(!authUser && userLevel > 0) return <Navigate to="/login" replace />

  /*
    Senão, se há um usuário não administrador tentando acessar uma
    rota de nível 2, mostramos uma mensagem de acesso negado
  */
  if(!(authUser?.is_admin) && userLevel === 2) return (
    <Box>
      <Typography variant="h2" color="error">
        Acesso negado
      </Typography>
    </Box>
  )

  /*
    Se chegou até aqui, é porque a rota é liberada para qualquer
    um (nível 0) ou o usuário possui autorização para acessar o
    nível
  */
  return children
}
=======
import React from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

import { Navigate, useLocation, useNavigate } from 'react-router-dom'

import { feedbackWait } from '../ui/Feedback'
import AuthContext from '../contexts/AuthContext'
import fetchAuth from '../lib/fetchAuth'

export default function AuthGuard({ children, userLevel = 0 }) {
  /*
    userLevel:
    0 ~> rota pode ser acessada mesmo sem usuário autenticado (padrão)
    1 ~> rota exige usuário autenticado para ser acessada
    2 ~> rota exige usuário autenticado e administrador para ser acessada
  */

  const { authState, setAuthState } = React.useContext(AuthContext)
  const {
    authUser
  } = authState

  const [status, setStatus] = React.useState('IDLE')

  const navigate = useNavigate()
  const location = useLocation()

  async function checkAuthUser() {
    /*
      Sempre que se tentar acessar uma nova rota de front-end, esta
      função será executada para consultar o back-end se há um usuário
      autenticado
    */
    setStatus('PROCESSING')
    feedbackWait(true)
    try {
      const user = await fetchAuth.get('/users/me')
      setAuthState({ ...authState, authUser: user })
    }
    catch(error) {
      setAuthState({ ...authState, authUser: null })
      console.error(error)
      navigate('/login', { replace: true })
    }
    finally {
      feedbackWait(false)
      setStatus('DONE')
    }
  }

  // Este useEffect será executado sempre que a rota (location) for alterada
  React.useEffect(() => {
    /*
      Salva a rota atual para posterior redirecionamento (caso a rota atual
      não seja o próprio login)
    */
    if(! location.pathname.includes('login')) {
      setAuthState({ ...authState, redirectTo: location })
    }

    checkAuthUser()
  }, [location])

  if(['IDLE', 'PROCESSING'].includes(status)) return <></>

  /*
    Se não há usuário autenticado e o nível de acesso (> 0) assim o
    exige, redirecionamos para a página de login
  */
  if(!authUser && userLevel > 0) {
    console.log({authUser, userLevel})
    return <Navigate to="/login" replace />
  }

  /*
    Senão, se há um usuário não administrador tentando acessar uma
    rota de nível 2, mostramos uma mensagem de acesso negado
  */
  if(!(authUser?.is_admin) && userLevel === 2) return (
    <Box>
      <Typography variant="h2" color="error">
        Acesso negado
      </Typography>
    </Box>
  )

  /*
    Se chegou até aqui, é porque a rota é liberada para qualquer
    um (nível 0) ou o usuário possui autorização para acessar o
    nível
  */
  console.log('AUTHGUARD:', authUser)
  return children
}
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
