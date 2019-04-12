import { Item } from './item.model'
import { crudControllers } from '../../utils/crud'
import mongoose from 'mongoose'
import { connect } from '../../utils/db'

// const createOne = model.create()
//C model.create new model()
//R model.find() model.findOne() model.findById()
console.log('yo')

const run = async () => {
  try {
    await connect('mongodb://localhost:27017/api-test')
    const item = await Item.create({
      name: 'first Item',
      createdBy: mongoose.Types.ObjectId(),
      list: mongoose.Types.ObjectId()
    })
    const updated = await Item.findByIdAndUpdate(
      item._id,
      { name: 'eat' },
      { new: true }
    ).exec()
    console.log(item, 'Hi')
  } catch (e) {
    console.error(e)
  }
}

run()
// export default crudControllers(Item)
