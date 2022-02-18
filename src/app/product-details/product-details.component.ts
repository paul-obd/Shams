import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from '../models/order.model';
import { Product } from '../models/product.model';
import { CartService } from '../services/cart.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  id : string
  category: string
  name: string
  img: string
  price?: number

  quantity: number = 1

 total: number // = this.price * this.quantity

  product: Product

  constructor(public cartService: CartService,private router: Router, public productService: ProductsService,private route : ActivatedRoute, private changeDetector: ChangeDetectorRef) { }

  ngOnInit(): void {
    const Idparam = this.route.snapshot.paramMap.get('id')
    this.productService.getOneProduct(Idparam).subscribe(product =>{
        const data: any = product.payload.data()
        this.product = {
          id: product.payload.id,
          ...data

        } as Product;

        this.name = this.product.name
        this.id = this.product.id
        this.category = this.product.category
        this.img = this.product.img
        this.price = this.product.price

        this.total = (this.price * this.quantity)
      })

      // this.cartService.noToolbar = true
      // this.cartService.inCart = false
      this.changeDetector.detectChanges()


  }

  checkout(){
    alert("Kabber 3a2lak wlo :p")
  }

  addToCart(){
    let order = new Order
    order.nb = this.cartService.cart.length
    order.product = {
      id: this.id,
      name: this.name,
      category: this.category,
      img: this.img,
      price: this.price


    } as Product
    // order.product.category = this.category
    // order.product.name = this.name
    // order.product.img = this.img
    // order.product.price = this.price
    order.quantity = this.quantity
    order.total = this.total
    this.cartService.cart.push(order)

    this.cartService.doTotal()
    this.cartService.fromDetails = true
    this.cartService.inCart = true
    this.cartService.noToolbar = true

    this.router.navigate(['/cart'])

   
  }

  add() {
    this.quantity += 1
    this.total = (this.price * this.quantity)
  }

  remove() {
    if (this.quantity === 1) {
      alert("Quantity can't be zero")

    } else {
      this.quantity -= 1
      this.total = (this.price * this.quantity)
    }

  }

}
