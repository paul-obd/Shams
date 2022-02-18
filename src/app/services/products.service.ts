import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Product } from '../models/product.model';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: Product[] = []

  featuredProducts: Product[] = []

  rings: Product[] = []

  bracelets: Product[] = []

  matTab = 0

  constructor(private firestore: AngularFirestore) { }

  

  getProducts() {
    return  this.firestore.collection('products').snapshotChanges();
  }

  getOneProduct(id: string){
    return this.firestore.doc('products/' + id).snapshotChanges();

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

  getAllRings(){
    return  this.firestore.collection('products', ref => ref.where("category", "==", "ring")).snapshotChanges();

  }

  getAllBracelets(){
    return  this.firestore.collection('products', ref => ref.where("category", "==", "bracelet")).snapshotChanges();
  }

}
