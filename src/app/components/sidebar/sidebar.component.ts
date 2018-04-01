import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector : 'side-bar',
    templateUrl : 'sidebar.component.html',
    styleUrls : ['sidebar.component.css']
})
export class SideBarComponent{

    @Input() open : boolean = false;

    constructor(private router : Router){

    }
    
    SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    swipe(action) {
        console.log("cdscsd");
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

    
        
    
}