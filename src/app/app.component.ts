import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
    // moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
    // providers : [ Router ]
})
export class AppComponent {
  open: any;
  constructor(private router : Router){}  
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