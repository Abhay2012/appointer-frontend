import { Component, OnInit } from "@angular/core";
import { CategoriesList } from "../../modals/lists";
import { ServicesService } from "../../providers/services.service";

declare let $ :any;
@Component({
    selector : 'home',
    templateUrl : 'home.component.html',
    styleUrls : ['home.component.css'],
    providers : [ ServicesService ]
})
export class HomeComponent implements OnInit{

    categories : CategoriesList[] = [];

    constructor(private ss : ServicesService){

    }

    ngOnInit(){
        this.getCategories();
    }

    getCategories(){
        this.ss.getCategories().subscribe((res:any)=>{
            this.categories = res.data;
        },(err:any)=>{

        })
    }

    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    swipe(action) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            $('.carousel-control-prev').click();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            $('.carousel-control-next').click();
        }
    }
}