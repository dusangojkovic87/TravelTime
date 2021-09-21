import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-about-us-card',
  templateUrl: './about-us-card.component.html',
  styleUrls: ['./about-us-card.component.css']
})
export class AboutUsCardComponent implements OnInit,AfterViewInit {
  outletCounter:number = 0;
  countriesCounter:number = 0;
  @ViewChild('intersectionAboustUs') intersectionAboustUs?:ElementRef;
  observer?:IntersectionObserver;
  @ViewChild('aboutUsWrrapper1') aboutUsWrrapper1?:ElementRef;
  @ViewChild('aboutUsWrrapper2') aboutUsWrrapper2?:ElementRef;
  @ViewChild('imgWrrapper') imgWrrapper?:ElementRef;


  constructor() { }

  ngOnInit(): void {
    this.outletCounting();
    this.countriesCounting();
  }

  ngAfterViewInit(){
    this.observer = new IntersectionObserver(entries =>{
       if(entries[0].isIntersecting){
         let wrrapper1 = this.aboutUsWrrapper1?.nativeElement as HTMLElement;
         wrrapper1.classList.add('slide--from--left');
         let wrrapper2 = this.aboutUsWrrapper2?.nativeElement as HTMLElement;
         wrrapper2.classList.add('slide--from--right');
         let img = this.imgWrrapper?.nativeElement as HTMLElement;
         img.classList.add("rotate--img");
       }
    },{threshold:0.25});
    this.observer.observe(this.intersectionAboustUs?.nativeElement as HTMLElement);

  }

  outletCounting(){
    let outledID = setInterval(() =>{
      if(this.outletCounter === 256){
        clearInterval(outledID);
      }else{
        this.outletCounter ++;
      }
    },10);
  }

  countriesCounting(){
    let countriesID = setInterval(() =>{
      if(this.countriesCounter === 34){
        clearInterval(countriesID);
      }else{
        this.countriesCounter ++;
      }
    },10);

  }







}
