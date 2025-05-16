import { CommonModule } from '@angular/common';
import { Component, AfterViewInit } from '@angular/core';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
declare var $: any;

@Component({
  selector: 'app-deliverynotedetails',
  imports: [NgxDatatableModule, CommonModule],
  templateUrl: './deliverynotedetails.component.html',
  styleUrl: './deliverynotedetails.component.css'
})
export class DeliverynotedetailsComponent implements AfterViewInit {
  isLoading: boolean = true;

  rows = [
    { product: 'Cement', quantity: 10, price: 100 },
    { product: 'Bricks', quantity: 500, price: 5 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
    { product: 'Steel Rods', quantity: 20, price: 200 },
  ];

  ngAfterViewInit(): void {
    $(document).ready(function () {
      $('#example').DataTable({
        lengthMenu: [
          [5, 10, 15, 25, 50, -1],
          [5, 10, 15, 25, 50, 'All']
        ]
      });
    });
  }
  
}