import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>();
  sort = 'desc';
  itemsShowCount = 12;
  
  ngOnInit(): void {
  
  }

  onSortUpdate(newSort: string): void {
    this.sort = newSort;
  }

  onCountUpdated(count: number): void {
    this.itemsShowCount = count;
  }

  onColumnsUpdate(count: number):void {
    this.columnsCountChange.emit(count);
  }

}
