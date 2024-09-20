import express, { Router } from 'express'

const router = Router()

router.get('/', (req, res, next) => {
  res.send('<h1>Fetching products.............</h1>')
})

router.post('/', (req, res, next) => {
  res.status(201)
  res.send([
    {
      id: 1,
      name: 'Product 1',
    },
    {
      id: 2,
      name: 'Product 2',
    },
    {
      id: 3,
      name: 'Product 3',
    },
    {
      id: 4,
      name: 'Product 4',
    },
    {
      id: 5,
      name: 'Product 5',
    },
    {
      id: 6,
      name: 'Product 6',
    },
    {
      id: 7,
      name: 'Product 7',
    },
  ])
})

router.get('/:id', (req, res, next) => {
  res.send('Getting a single product')
})

router.patch('/:id', (req, res, next) => {
  res.send('Updating a single product')
  console.log(req.method)
})
router.delete('/:id', (req, res, next) => {
  res.send('Deleting a single product')
})

export default router

// Take the following to app.js
// app.use('/products', ProductsRoute)
