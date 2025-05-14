// import { Router } from 'express';
// import { ProductController } from '../../interfaces/controllers/productController';
// import { CreateProductUseCase } from '../../use-cases/product/createProductUseCase';
// import { GetProductsUseCase } from '../../use-cases/product/getProductsUseCase';
// // import { GetProductByIdUseCase } from '../../use-cases/product/get-pro';
// // import { UpdateProductUseCase } from '../../use-cases/product/update-product.use-case';
// // import { DeleteProductUseCase } from '../../use-cases/product/delete';
// // import { MongooseProductRepository } from '../../interfaces/repositories/mongoose/mongoProductRepository';
// import { authMiddleware } from '../../interfaces/middlewares/authMiddleware';
// import { adminMiddleware } from '../../interfaces/middlewares/adminMiddleware';

// const router = Router();

// // Dependencies
// const productRepository = new MongooseProductRepository();

// // Use cases
// const createProductUseCase = new CreateProductUseCase(productRepository);
// const getProductsUseCase = new GetProductsUseCase(productRepository);
// // const getProductByIdUseCase = new GetProductByIdUseCase(productRepository);
// // const updateProductUseCase = new UpdateProductUseCase(productRepository);
// // const deleteProductUseCase = new DeleteProductUseCase(productRepository);

// // Controller
// const productController = new ProductController(
//   createProductUseCase,
//   getProductsUseCase,
//   getProductByIdUseCase,
//   updateProductUseCase,
//   deleteProductUseCase
// );

// // Routes
// router.get('/', (req, res) => productController.getProducts(req, res));
// router.get('/:id', (req, res) => productController.getProductById(req, res));
// router.post('/', [authMiddleware, adminMiddleware], (req, res) => productController.createProduct(req, res));
// router.put('/:id', [authMiddleware, adminMiddleware], (req, res) => productController.updateProduct(req, res));
// router.delete('/:id', [authMiddleware, adminMiddleware], (req, res) => productController.deleteProduct(req, res));

// export default router;