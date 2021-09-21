import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-tour-card-list',
  templateUrl: './tour-card-list.component.html',
  styleUrls: ['./tour-card-list.component.css']
})
export class TourCardListComponent implements OnInit,AfterViewInit {
  private observer?:IntersectionObserver;
  @ViewChild('intersectingTourContainer') intersectingTourContainer?:ElementRef;
  @ViewChild('firstDropAnimation') firstDropAnimation?:ElementRef;
  @ViewChild('secondDropAnimation') secondDropAnimation?:ElementRef;
  @ViewChild('thirdDropAnimation') thirdDropAnimation?:ElementRef;
  @ViewChild('fourthDropAnimation') fourthDropAnimation?:ElementRef;

  constructor() { }

  ngOnInit(): void {

  }

  ngAfterViewInit(){
    this.observer = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
          let firsAnimation = this.firstDropAnimation?.nativeElement as HTMLElement;
          firsAnimation.classList.add("first--dropping--animation");
          let secondAnimation = this.secondDropAnimation?.nativeElement as HTMLElement;
          secondAnimation.classList.add("second--dropping--animation");
          let thridAnimation = this.thirdDropAnimation?.nativeElement as HTMLElement;
          thridAnimation.classList.add("third--dropping--animation");
          let fourthAnimation = this.fourthDropAnimation?.nativeElement as HTMLElement;
          fourthAnimation.classList.add('fourth--dropping--animation');
      }
    },{
      threshold:0.25
    });
    this.observer.observe(this.intersectingTourContainer?.nativeElement as HTMLElement);

  }



}
