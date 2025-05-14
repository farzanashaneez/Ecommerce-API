import { Product } from '../../entities/productEntity';

export interface ProductRepository {
  findById(id: string): Promise<Product | null>;
  findAll(filters?: object): Promise<Product[]>;
  create(product: Product): Promise<Product>;
  update(id: string, product: Partial<Product>): Promise<Product | null>;
  delete(id: string): Promise<boolean>;
}