export interface Product {
    id?: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
    category: string;
    inventory: number;
    createdAt?: Date;
    updatedAt?: Date;
  }