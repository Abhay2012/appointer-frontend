import { Component, OnInit } from "@angular/core";

declare let $ :any;
@Component({
    selector : 'home',
    templateUrl : 'home.component.html'
})
export class HomeComponent implements OnInit{

    ngOnInit(){
    }

    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    swipe(action) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            console.log("dvd");
            $('.carousel-control-prev').click();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            $('.carousel-control-next').click();
        }
    }
}