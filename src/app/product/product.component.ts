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

  constructor(private productService: ProductService) {


  }
  ngOnInit() {
    console.log("COmponent loaded");

    // Write the code to make API call to get the list of the products
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
    },

      (error: any) => {
        console.log(error);
      }
    )
  }
}
