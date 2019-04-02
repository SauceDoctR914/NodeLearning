import { crudControllers } from '../../utils/crud'
import { Item } from './item.model'
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
