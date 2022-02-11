import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public productService: ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(data =>{
      this.productService.products = data.map(p =>{
        const data: any = p.payload.doc.data()
        return {
          id: p.payload.doc['id'],
          ...data

        } as Product;
      })
    })
  }

  // getProducts(){
  //   this.productService.getProducts()
  // }

  addProduct(product: Product){
    this.productService.addProduct(product)
  }

  updateProducts(product: Product){
    this.productService.updateProduct(product)
  }

  deleteProduct(productId: string){
    this.productService.deleteProduct(productId)
  }

}


// //images = [
//https://cdn.dribbble.com/users/2131224/screenshots/17440519/media/3f8ffde249656310eb8634bf0ccdc2a1.png?compress=1&resize=1200x900&vertical=top
// ]