import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface Hotel {
  id: number;
  name: string;
  stars: number;
  price: number;
  image: string;
  amenities: string[];
}

@Injectable()
export class HotelsService {
  public hotels:any[] = [];
  constructor(private http: HttpClient) { }

  getHotels(): Observable<any>{
    console.log("sii")
    return this.http.get('http://localhost:4071/api/hotels')
	};
}
