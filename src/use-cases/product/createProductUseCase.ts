import { Product } from '../../core/entities/productEntity';
import { ProductRepository } from '../../core/interfaces/repositories/productRepositoryInterface';

export class CreateProductUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(productData: Omit<Product, 'id' | 'createdAt' | 'updatedAt'>): Promise<Product> {
    return this.productRepository.create(productData);
  }
}