import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  activeContent: string = 'clientinfo';
  client: any = {};

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchClientData();
  }

  fetchClientData(): void {
    this.http.get<any>('http://localhost/kexphp/client.php').subscribe(response => {
      const fieldData = response?.response?.data?.[0]?.fieldData;
      if (fieldData) {
        this.client = fieldData;
      }
    });
  }

  showContent(content: string): void {
    this.activeContent = content;
  }
}
