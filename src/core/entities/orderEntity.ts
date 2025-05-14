export interface OrderItem {
    productId: string;
    quantity: number;
    price: number;
    name: string;
  }
  
  export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled'
  }
  
  export interface Order {
    id?: string;
    userId: string;
    items: OrderItem[];
    totalAmount: number;
    shippingAddress: Address;
    status: OrderStatus;
    paymentInfo: PaymentInfo;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export interface Address {
    street: string;
    city: string;
    state: string;
    country: string;
    zipCode: string;
  }
  
  export interface PaymentInfo {
    method: string;
    status: string;
    transactionId?: string;
  }