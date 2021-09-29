import { Component, OnInit } from '@angular/core';
import { Product, AppService } from '../app.service';

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.scss'],
  providers: [AppService]
})
export class TreeViewComponent implements OnInit {
  products: Product[];
  currentItem: Product;

  constructor(service: AppService) {
    this.products = service.getProducts();
    this.currentItem = this.products[0];
  }
  selectItem(e: { itemData: Product; }) {
    this.currentItem = e.itemData;
  }

  ngOnInit(): void {
  }

  helloWorld() {
    alert('Hello world!');
  }

}
