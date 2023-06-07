import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productId: any;
  name: any;
  price: any;
  description: any;
  imageURL: any;
  products: any = [];
  constructor(private productService: ProductService) {

  }
  ngOnInit() {
    console.log("COmponent loaded");
    this.getAllProducts();

  }

  getAllProducts() {
    this.productService.list().subscribe(
      (response: any) => {
        console.log(response);
        this.products = response;
      },
      (error: any) => {
        console.log(error);
      }
    )
  }

  addProduct() {

    var product = {
      productId: this.productId,
      name: this.name,
      price: this.price,
      description: this.description,
      imageURL: this.imageURL
    }
    console.log(product);
    this.productService.add(product).subscribe((response: any) => {
      console.log(response);
      this.getAllProducts();

    },

      (error: any) => {
        console.log(error);
      }
    )
  }
}
