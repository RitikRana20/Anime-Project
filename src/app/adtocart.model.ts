// src/app/addtocart.model.ts
export interface addToCart {
image: any;
description: string;
  id: number;
  name: string;
  price: number;
  quantity: number;
  total?: number; // Optional, since it will be calculated
}
