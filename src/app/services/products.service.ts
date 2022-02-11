import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = []

  constructor(private firestore: AngularFirestore) { }

  

  getProducts() {
    return  this.firestore.collection('products').snapshotChanges();
  }

  addProduct(product: Product) {
    
    return this.firestore.collection('products').add(product);
  }

  updateProduct(product: Product) {
    delete product.id;
    return this.firestore.doc('products/' + product.id).update(product);
  }

  deleteProduct(productId: string){
    return this.firestore.doc('products/' + productId).delete();
  }

}
