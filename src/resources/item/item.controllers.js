import { Item } from './item.model'

import { crudControllers } from '../../utils/crud'

import { connect } from '../../utils/db'

// const createOne = model.create()

//C model.create new model()
//R model.find() model.findOne() model.findById()

const run = async () => {
  await connect()
  const item = Item.create({
    name: 'first Item',
    createdBy: mongoose.Types.ObjectId(),
    list: mongoose.Types.ObjectId()
  })
  console.log(item, 'Hi')
}
run()
export default crudControllers(Item)
