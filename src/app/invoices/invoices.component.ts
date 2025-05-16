import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';


declare var $: any;
@Component({
  selector: 'app-invoices',
  imports: [CommonModule],
  templateUrl: './invoices.component.html',
  styleUrl: './invoices.component.css'
})
export class InvoicesComponent implements AfterViewInit {

  rowsdata = [
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

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private router: Router) {}


  navigateToDetails(item: any) {
    this.router.navigate(['/invoices-details', item.product]);
  }
  
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      $(document).ready(() => {
        const table = $('#examples').DataTable({
          responsive: true,
          paging: true,
          columnDefs: [
            { targets: '_all', className: 'text-center' }
          ]
        });
  
        $('#examples tbody').on('click', 'tr', (event: JQuery.ClickEvent) => {
          const rowData = table.row(event.currentTarget).data();
          if (rowData) {
            const item = {
              product: rowData[0],
              quantity: rowData[1],
              price: rowData[2]
            };
            this.navigateToDetails(item);
          }
        });
        
      });
    }
  }
  
}