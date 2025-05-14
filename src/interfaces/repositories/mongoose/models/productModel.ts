import mongoose, { Schema } from 'mongoose';
import { Product } from '../../../../core/entities/productEntity';

const productSchema = new Schema<Product>(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    imageUrl: { type: String },
    category: { type: String, required: true },
    inventory: { type: Number, required: true, default: 0 }
  },
  {
    timestamps: true,
    toObject: {
      virtuals: true,
      transform: function (doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
        return ret;
      }
    }
  }
);

export const ProductModel = mongoose.model<Product>('Product', productSchema);