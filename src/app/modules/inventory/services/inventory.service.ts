import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import ProductModel from '../model/product.model';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  constructor(http: HttpClient) {}

  readAllProducts(): Observable<ProductModel[]> {
    const products: ProductModel[] = [
      {
        id: '12345',
        name: 'Enchiladas',
        price: 50,
        cost: 30,
        stock: 10,
        hasStock: true,
        type: 'Platillo',
      },
      {
        id: '12346',
        name: 'Tacos',
        price: 50,
        cost: 30,
        stock: 10,
        hasStock: true,
        type: 'Platillo',
      },
      {
        id: '12347',
        name: 'Gaseosa Coca Cola',
        price: 30,
        cost: 15,
        stock: 10,
        hasStock: true,
        type: 'Bebida',
      },
      {
        id: '12348',
        name: 'Fresco Nat. Cebada con Piña',
        price: 30,
        cost: 15,
        stock: 10,
        hasStock: true,
        type: 'Bebida',
      },
      {
        id: '12349',
        name: 'Servicio de pollo asado',
        price: 130,
        cost: 100,
        stock: 10,
        hasStock: true,
        type: 'Platillo',
      },
    ];

    return of(products);
  }

  readById(id: string){
    return of()
  }
}
