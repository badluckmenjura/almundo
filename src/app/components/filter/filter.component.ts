import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {
  private searchName:boolean = true;
  private searchStars:boolean = true;
  public someRange:number[] = [1,5];
  public name:string;
  @Output() public fiterName = new EventEmitter();
  @Output() public fiterStars = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  private collapseStarsSearch(){
    this.searchStars = !this.searchStars;
  }
  private collapseNameSearch(){
    this.searchName = !this.searchName;
  }
  public filterByName(filter: string) {
    this.fiterName.emit(filter);
  }
  public filterByStars(filter: number[]) {
    this.fiterStars.emit(filter);
  }

}
