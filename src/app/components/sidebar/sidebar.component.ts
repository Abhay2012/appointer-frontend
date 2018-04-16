import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CategoriesList } from "../../modals/lists";

@Component({
    selector : 'side-bar',
    templateUrl : 'sidebar.component.html',
    styleUrls : ['sidebar.component.css']
})
export class SideBarComponent{

    @Input() open : boolean = false;

    local : any;
    showSublist : Boolean = false;
    subList : CategoriesList[]=[
        {
            title : 'Tutors',
            icon : 'fas fa-user',
            route : '/'
        },
        {
            title : 'Grocery Shops',
            icon : 'fas fa-shopping-cart',
            route : '/'
        },
        {
            title : 'Plumbers',
            icon : 'fas fa-user',
            route : '/'
        },
        {
            title : 'Show All',
            icon : 'fas fa-user',
            route : '/'
        },
        {
            title : 'Grocery Shops',
            icon : 'fas fa-shopping-cart',
            route : '/'
        },
        {
            title : 'Plumbers',
            icon : 'fas fa-user',
            route : '/'
        },
        {
            title : 'Show All',
            icon : 'fas fa-user',
            route : '/'
        }
    ];
    constructor(private router : Router){
        this.local = localStorage;
    }
    
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    swipe(action) {
        console.log("from side bar");
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.open = true;
        }
        if (action === this.SWIPE_ACTION.LEFT) {
          this.open = false;
        }
    }

    toProfile(){
        if(!localStorage.getItem('appointer-token')){
            this.router.navigate(['login'])
        }else{
            this.router.navigate(['profile'])
        }
    }

    logout(){
        localStorage.clear();
        this.router.navigate(['/']);
    }
    
    
    fun($event){
        this.showSublist = !this.showSublist;
        $event.stopPropagation();
    }   
    
}