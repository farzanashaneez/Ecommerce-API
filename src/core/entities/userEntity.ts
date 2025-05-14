export interface User {
    id?: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    createdAt?: Date;
    updatedAt?: Date;
  }
  
  export enum UserRole {
    CUSTOMER = 'customer',
    ADMIN = 'admin'
  }