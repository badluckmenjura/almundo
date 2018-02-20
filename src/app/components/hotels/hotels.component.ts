import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html'
})
export class HotelsComponent implements OnInit {
  @Input() public hotels:any[];
  @Input() public name:string;
  @Input() public stars:number[];
  constructor() {}

  ngOnInit() {}

}
