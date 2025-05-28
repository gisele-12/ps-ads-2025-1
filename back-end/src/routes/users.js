<<<<<<< HEAD
import { Router } from 'express'
import controller from '../controllers/users.js'

const router = Router()

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/me', controller.me)

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router
=======
import { Router } from 'express'
import controller from '../controllers/users.js'

const router = Router()

router.post('/login', controller.login)
router.post('/logout', controller.logout)
router.get('/me', controller.me)

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router
>>>>>>> 5a9f04e931d3f2f9a9b6cbc4b079c3d06102a9a3
