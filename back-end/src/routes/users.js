<<<<<<< HEAD
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
=======
import { Router } from 'express'
import controller from '../controllers/users.js'

const router = Router()

router.post('/login', controller.login)
router.get('/me', controller.me)

router.post('/', controller.create)
router.get('/', controller.retrieveAll)
router.get('/:id', controller.retrieveOne)
router.put('/:id', controller.update)
router.delete('/:id', controller.delete)

export default router
=======
import { Router } from 'express'
const router = Router()

/* GET all users. */
router.get('/', function (req, res) {
  res.send('Fetched all users')
})

/* POST a user. */
router.post('/', function (req, res) {
  res.send('Created a user')
})

/* PATCH a user. */
router.patch('/', function (req, res) {
  res.send('Updated a user')
})

/* DELETE a user. */
router.delete('/', function (req, res) {
  res.send('Deleted a user')
})

export default router
>>>>>>> 36697adf93b94dbd8dd7789964af32ee90720f5c
>>>>>>> 25c66082985955ca47a6377c0106791540ed057b
