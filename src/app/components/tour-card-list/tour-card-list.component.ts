import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tour-card-list',
  templateUrl: './tour-card-list.component.html',
  styleUrls: ['./tour-card-list.component.css']
})
export class TourCardListComponent implements OnInit,AfterViewInit {
  private observer?:IntersectionObserver;
  @ViewChild('test') test?:ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.observer = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
        console.log("presreo");
        console.log(entries[0].target);
      }
    },{
      threshold: 1
    });
    this.observer.observe(this.test?.nativeElement as HTMLElement);

  }



}
