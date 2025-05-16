import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-matlocations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './matlocations.component.html',
  styleUrls: ['./matlocations.component.css']
})
export class MatlocationsComponent implements OnInit {
  rowsdata: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    this.http.get<any>('https://cwptraining.ntplstaging.com/rahul2024/Angular/fetch.php')
      .subscribe(
        response => {
          console.log('Full API response:', response);

          if (response && response.response && Array.isArray(response.response.data)) {
            this.rowsdata = response.response.data.map((item: any) => item.fieldData);
          } else {
            this.rowsdata = [];
          }

          console.log('Extracted rowsdata:', this.rowsdata);
        },
        error => {
          console.error('Error fetching data:', error);
        }
      );
  }

  // downloadPhoto(item: any) {
  //   const downloadUrl = `http://cwptraining.ntplstaging.com/rahul2024/Angular/pdf.php?S_No=${item.S_No}`;
  //   const link = document.createElement('a');
  //   link.href = downloadUrl;
  //   link.setAttribute('download', '');
  //   link.click();
  // }

  downloadPhoto(item: any) {
  const downloadUrl = `http://cwptraining.ntplstaging.com/rahul2024/Angular/pdf.php?S_No=${item.S_No}`;
  const newTab = window.open(downloadUrl, '_blank');

  if (newTab) {
    newTab.focus();
        newTab.document.close();

  } else {
    alert("Please allow popups for this website.");
  }
}
// downloadPhoto(item: any): void {
//   const downloadUrl = `http://cwptraining.ntplstaging.com/rahul2024/Angular/pdf.php?S_No=${item.S_No}`;
//     window.open(downloadUrl, '_blank');

//   const a = document.createElement('a');
//   a.href = downloadUrl;
//   a.setAttribute('download', ''); 
//   document.body.appendChild(a);
//   a.click();
//   a.remove();
// }


  

  navigateToDetails(item: any): void {
    console.log('Navigating to details of:', item);
  }
}
