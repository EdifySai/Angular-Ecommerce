import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient: HttpClient) { }

  add(product: any) {

    return this.httpClient.post("http://localhost:9012/product/add", product);

  }


}
