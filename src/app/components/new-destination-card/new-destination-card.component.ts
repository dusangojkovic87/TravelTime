import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-new-destination-card',
  templateUrl: './new-destination-card.component.html',
  styleUrls: ['./new-destination-card.component.css']
})
export class NewDestinationCardComponent implements OnInit,AfterViewInit {
  private observer?:IntersectionObserver;
  @ViewChild('discount') discount?:ElementRef;
  @ViewChild('newDestination') newDestination?:ElementRef;
  @ViewChild('observeElement') observeElement?:ElementRef;


  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    this.observer = new IntersectionObserver(entries =>{
      if(entries[0].isIntersecting){
       let discountHTML = this.discount?.nativeElement as HTMLElement;
       discountHTML.classList.add('slide--from--left');
       let newDestinationHTML = this.newDestination?.nativeElement as HTMLElement;
       newDestinationHTML.classList.add('slide--from--right');

      }

    });

    this.observer.observe(this.observeElement?.nativeElement as HTMLElement);

  }

}
