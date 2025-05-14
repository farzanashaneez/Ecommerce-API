import { Request, Response } from 'express';
import { CreateProductUseCase } from '../../use-cases/product/createProductUseCase';
import { GetProductsUseCase } from '../../use-cases/product/getProductsUseCase';
// import { GetProductByIdUseCase } from '../../use-cases/product/get-product-by-id.use-case';
// import { UpdateProductUseCase } from '../../use-cases/product/update-product.use-case';
// import { DeleteProductUseCase } from '../../use-cases/product/delete-product.use-case';

export class ProductController {
  constructor(
    private createProductUseCase: CreateProductUseCase,
    private getProductsUseCase: GetProductsUseCase,
    // private getProductByIdUseCase: GetProductByIdUseCase,
    // private updateProductUseCase: UpdateProductUseCase,
    // private deleteProductUseCase: DeleteProductUseCase
  ) {}

  async createProduct(req: Request, res: Response): Promise<Response> {
    try {
      const product = await this.createProductUseCase.execute(req.body);
      return res.status(201).json({
        success: true,
        data: product
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to create product'
      });
    }
  }

  async getProducts(req: Request, res: Response): Promise<Response> {
    try {
      const products = await this.getProductsUseCase.execute(req.query);
      return res.status(200).json({
        success: true,
        data: products
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error instanceof Error ? error.message : 'Failed to fetch products'
      });
    }
  }

//   async getProductById(req: Request, res: Response): Promise<Response> {
//     try {
//       const product = await this.getProductByIdUseCase.execute(req.params.id);
//       if (!product) {
//         return res.status(404).json({
//           success: false,
//           message: 'Product not found'
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         data: product
//       });
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error instanceof Error ? error.message : 'Failed to fetch product'
//       });
//     }
//   }

//   async updateProduct(req: Request, res: Response): Promise<Response> {
//     try {
//       const product = await this.updateProductUseCase.execute(req.params.id, req.body);
//       if (!product) {
//         return res.status(404).json({
//           success: false,
//           message: 'Product not found'
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         data: product
//       });
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error instanceof Error ? error.message : 'Failed to update product'
//       });
//     }
//   }

//   async deleteProduct(req: Request, res: Response): Promise<Response> {
//     try {
//       const success = await this.deleteProductUseCase.execute(req.params.id);
//       if (!success) {
//         return res.status(404).json({
//           success: false,
//           message: 'Product not found'
//         });
//       }
//       return res.status(200).json({
//         success: true,
//         message: 'Product deleted successfully'
//       });
//     } catch (error) {
//       return res.status(400).json({
//         success: false,
//         message: error instanceof Error ? error.message : 'Failed to delete product'
//       });
//     }
//   }
}