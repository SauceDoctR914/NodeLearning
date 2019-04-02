import { Router } from 'express'
import controllers from './item.controllers'
import { Router } from 'express'
const controller = (req, res) => {
  res.send({ message: 'item controller' })
}
const router = Router()
router
  .route('/')
  .get(controller)
  .post(controller)
  .put(controller)
  .delete(controller)
router
  .route('/:id')
  .get(controller)
  .post(controller)
  .put(controller)
  .delete(controller)

export default router
