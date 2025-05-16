import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, DataTablesModule, NgxDatatableModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'kex';
  activeContent: string = 'clientinfo'; 
  activeButton: string = '';

  showContent(content: string) {
    this.activeContent = content;
  }

  private router = inject(Router); 
  navigateToclientInfo() {
    this.activeButton = 'client';
    this.router.navigate(['/client']); 
  }
  navigateToDelivery() {
    this.activeButton = 'delivery';
    this.router.navigate(['/delivery']); 
  }
  navigateToInvoices() {
    this.activeButton = 'invoices';
    this.router.navigate(['/invoices']); 
  }
  navigateMatLocations() {
    this.activeButton = 'mat';
    this.router.navigate(['/mat-locations']); 
  }

  get isLoginPage(): boolean {
    return this.router.url === '/login' || this.router.url === '/register' || this.router.url === '/forgot-password' || this.router.url === '/reset-password';
  }
  
}
