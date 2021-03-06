import { Component, OnInit } from '@angular/core';
import { HotelsService } from '../../services/hotels.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  public hotels:any[] = [];
  public name:string = "";
  public stars:number[] = [1,5];
  public fiterByName(filter:string){
    this.name = filter
  }
  public fiterByStars(filter:number[]){
    this.stars = filter
  }
  constructor( private _hotelsService:HotelsService) {}

  ngOnInit() {
    this._hotelsService.getHotels()
      .subscribe(result => {
        console.log("sii2",result)
        this.hotels = result;
      });
    console.log("this.hotels comp",this.hotels)
  }
}
