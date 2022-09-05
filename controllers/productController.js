const Product = require("../models/Product")

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.json(products)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const getProductById = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findById(id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const createNewProduct = async (req, res) => {
  const { title, description, price, image, category } = req.body

  try {
    const product = await Product.create({
      title,
      description,
      price,
      image,
      category,
    })
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const updateProduct = async (req, res) => {
  const { id } = req.params
  const { title, description, price, image, category } = req.body

  try {
    const product = await Product.findByIdAndUpdate(
      id,
      {
        title,
        description,
        price,
        image,
        category,
      },
      { new: true }
    )
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

const deleteProduct = async (req, res) => {
  const { id } = req.params

  try {
    const product = await Product.findByIdAndDelete(id)
    res.json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
}
