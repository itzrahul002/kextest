import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';


declare var $: any;
@Component({
  selector: 'app-invoices-details',
  imports: [CommonModule],
  templateUrl: './invoices-details.component.html',
  styleUrl: './invoices-details.component.css'
})
export class InvoicesDetailsComponent {

  invoicedata = [
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

  invoicedatatwo = [
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $(document).ready(() => {
        const table = $('#invoice').DataTable({
          responsive: true,
          paging: true,
          columnDefs: [
            { targets: '_all', className: 'text-center' }
          ],
          lengthMenu: [
            [5, 10, 15, 25, 50, -1],
            [5, 10, 15, 25, 50, 'All']
          ]
        });
  
        $('#invoice tbody').on('click', 'tr', (event: JQuery.ClickEvent) => {
          const rowData = table.row(event.currentTarget).data();
          if (rowData) {
            const item = {
              product: rowData[0],
              quantity: rowData[1],
              price: rowData[2]
            };
          }
        });
        
      });
      $(document).ready(() => {
        const table = $('#invoicetwo').DataTable({
          responsive: true,
          paging: true,
          columnDefs: [
            { targets: '_all', className: 'text-center' }
          ],
          lengthMenu: [
            [5, 10, 15, 25, 50, -1],
            [5, 10, 15, 25, 50, 'All']
          ]
        });
  
        $('#invoicetwo tbody').on('click', 'tr', (event: JQuery.ClickEvent) => {
          const rowData = table.row(event.currentTarget).data();
          if (rowData) {
            const item = {
              product: rowData[0],
              quantity: rowData[1],
              price: rowData[2]
            };
          }
        });
        
      });
    }
  }

}
