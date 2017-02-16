import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector:'app-rating',
    moduleId: module.id,
    templateUrl:'star-rating.component.html'
})
 
export class StarRatingComponent {
    @Input() stars: number; 
    @Input() itemId: number;    
    @Output() starsClick:EventEmitter<any> = new EventEmitter<any>();
    
    inpustName:string;
    ngOnInit() {
        this.inpustName = this.itemId + '_stars';
    }
    onClick(stars:number):void{
        this.stars = stars;
        this.starsClick.emit({
            itemId: this.itemId,
            stars: stars
        });
    }    
}