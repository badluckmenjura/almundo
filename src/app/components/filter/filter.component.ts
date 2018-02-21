import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  public searchName:boolean = true;
  public searchStars:boolean = true;
  public someRange:number[] = [1,5];
  public name:string;
  @Output() public fiterName = new EventEmitter();
  @Output() public fiterStars = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  public collapseStarsSearch(){
    this.searchStars = !this.searchStars;
  }
  public collapseNameSearch(){
    this.searchName = !this.searchName;
  }
  public filterByName(filter: string) {
    this.fiterName.emit(filter);
  }
  public filterByStars(filter: number[]) {
    this.fiterStars.emit(filter);
  }

}
