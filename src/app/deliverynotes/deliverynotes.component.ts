import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-deliverynotes',
  imports: [CommonModule],
  templateUrl: './deliverynotes.component.html',
  styleUrls: ['./deliverynotes.component.css']
})
export class DeliverynotesComponent implements OnInit, AfterViewInit {
  dtOptions: any = {};
  data: any[] = [];
  isLoading: boolean = true;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.dtOptions = {
      paging: true,
      searching: true,
      ordering: true,
      info: true,
      lengthChange: true,
      pageLength: 5,
      lengthMenu: [
        [5, 10, 15, 25, 50, -1],
        [5, 10, 15, 25, 50, 'All']
      ],
      columns: [
        { title: 'S.No', className: 'text-center'  },
        { title: 'Name', className: 'text-center'  },
        { title: 'Phone', className: 'text-center'  },
        { title: 'Date', className: 'text-center'  },
        { title: 'Location', className: 'text-center'  },
        { title: 'Download', className: 'text-center' } 

      ]
    };

    this.fetchData();
  }

  fetchData(): void {
    const apiUrl = 'https://cwptraining.ntplstaging.com/rahul2024/Angular/fetch.php';
    this.http.get<any>(apiUrl).subscribe(
      (response) => {
        if (response && response.response && Array.isArray(response.response.data)) {
          this.data = response.response.data;
          this.isLoading = false;
          this.updateDataTable();
        } else {
          console.error('Invalid API response format:', response);
          this.data = [];
          this.isLoading = false;
        }
      },
      (error) => {
        this.isLoading = false;
        if (error.status === 401) {
          alert('Session expired. Please log in again.');
          this.router.navigate(['/login']); // Adjust route as needed
        } else {
          console.error('Error fetching data:', error);
          alert('Failed to load data. Please try again.');
        }
      }
    );
  }
  

  // updateDataTable(): void {
  //   if (isPlatformBrowser(this.platformId)) {
  //     const tableId = '#example';
  
  //     if ($.fn.DataTable.isDataTable(tableId)) {
  //       $(tableId).DataTable().clear().destroy();
  //     }
  
  //     $(tableId).DataTable({
  //       ...this.dtOptions,
  //       responsive: true,
  //       data: this.data.map(item => [
  //         item.fieldData.S_No,
  //         item.fieldData.NameFirst,
  //         item.fieldData.Phone,
  //         item.fieldData.Date,
  //         item.fieldData.Location
  //       ])
  //     });
  
  //     $('#example tbody').on('click', 'tr', (event: any) => {
  //       const rowData = $(event.currentTarget).find('td:first').text();
  //       if (rowData) {
  //         const sNo = parseInt(rowData, 10);
  //         this.viewRecord(sNo);
  //       }
  //     });
  //   }
  // }

  updateDataTable(): void {
    if (isPlatformBrowser(this.platformId)) {
      const tableId = '#example';
  
      if ($.fn.DataTable.isDataTable(tableId)) {
        $(tableId).DataTable().clear().destroy();
      }
  
      $(tableId).DataTable({
        ...this.dtOptions,
        responsive: true,
        data: this.data.map(item => [
          item.fieldData.S_No,
          item.fieldData.NameFirst,
          item.fieldData.Phone,
          item.fieldData.Date,
          item.fieldData.Location,
          `<button class="btn btn-sm btn-primary download-btn" data-url="${item.fieldData.Photo}">
             Download
           </button>`
        ]),
        columnDefs: [
          { targets: -1, orderable: false }
        ]
      });
  
      // ✅ Arrow function avoids 'this' issue
      $('#example tbody').on('click', '.download-btn', (event: any) => {
        event.stopPropagation();
        const url = $(event.currentTarget).data('url');
        if (url) {
          window.open(url, '_blank');
        }
      });
  
      $('#example tbody').on('click', 'tr', (event: any) => {
        if (!$(event.target).hasClass('download-btn')) {
          const rowData = $(event.currentTarget).find('td:first').text();
          if (rowData) {
            const sNo = parseInt(rowData, 10);
            this.viewRecord(sNo);
          }
        }
      });
    }
  }
  
  
  
  downloadFile(url: string): void {
    this.http.get(url, { responseType: 'blob' }).subscribe(
      (blob) => {
        const fileURL = URL.createObjectURL(blob);
        window.open(fileURL, '_blank');
      },
      (error) => {
        if (error.status === 401) {
          alert('Download failed: unauthorized. Please log in again.');
        } else {
          console.error('Download error:', error);
        }
      }
    );
  }
  

  viewRecord(id: number): void {
    this.router.navigate(['/delivery-notes', id]);
  }

  ngAfterViewInit(): void {
  }
  // ngAfterViewInit(): void {
  //   $(document).ready(function () {
  //     $('#example').DataTable({
  //       lengthMenu: [
  //         [5, 10, 15, 25, 50, -1],
  //         [5, 10, 15, 25, 50, 'All']
  //       ]
  //     });
  //   });
  // }
}
