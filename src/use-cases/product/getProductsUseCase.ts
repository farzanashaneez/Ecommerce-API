import { Product } from '../../core/entities/productEntity';
import { ProductRepository } from '../../core/interfaces/repositories/productRepositoryInterface';

export class GetProductsUseCase {
  constructor(private productRepository: ProductRepository) {}

  async execute(filters?: object): Promise<Product[]> {
    return this.productRepository.findAll(filters);
  }
}