export type ProductForm = Omit<Product, "id">

export interface Product{
  id: string
  imgUrl: string
  name: string
} 

export interface FullProduct extends Product{
  createdAt: Date 
  updatedAt: Date
}
