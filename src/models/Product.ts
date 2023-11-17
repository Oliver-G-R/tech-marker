export type ProductForm = Omit<Product, "id">

export interface Product{
  id: string
  imgUrl: string
  name: string
  price: number
  description: string
} 

export interface ProductFormBasic extends Omit<Product, "id">{}

export interface FullProduct extends Product{
  createdAt: Date 
  updatedAt: Date
}
