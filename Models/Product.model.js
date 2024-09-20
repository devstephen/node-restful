import Joi from 'joi'
import mongoose, { Schema } from 'mongoose'

// Schema
const ProductSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  date: { type: Date, default: Date.now },
})

// Joi validation schema
const userValidationSchema = Joi.object({
  title: Joi.string().required().min(5).max(50),
  price: Joi.number().required().min(20),
})

// Model
export const Product = mongoose.model('product', ProductSchema)
