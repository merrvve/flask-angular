import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { iSlide } from '../model/iSlide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  apiResponse: any;
  apiResponse2: any;
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http: HttpClient) {
    this.http.get('http://localhost:5000/api/data').subscribe((response: any) => {
      this.apiResponse = response.data;
    });
    let slides: iSlide[] = [{ id:1,title:'title1', content:'content1', layout: 1 }]
    this.http.post('http://localhost:5000/api/pptx', slides, { headers: this.headers }).subscribe((response: any) => {
      this.apiResponse2 = response;
    });
  }
}
