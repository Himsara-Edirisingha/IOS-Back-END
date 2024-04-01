const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
  categoryID: {
    type: Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  name: { type: String, required: true },
  description:{type: String, required: true},
  imageurl: { type: String, required: true },
  price: { type: Number, required: true },
  availability: { type: Number, default: 1 },
  tags: { type: [String], required: true },
  availablesize: { type: [String], required: true },
  availablecolor: { type: [String], required: true },
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
