import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { Router } from "@angular/router";
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
    // moduleId: module.id,
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.css']
    // providers : [ Router ]
})
export class AppComponent {
  open: any;
  @ViewChild('sideBar') sideBar;
     
  constructor(private router : Router,
    public toastr: ToastsManager,
    private vcr: ViewContainerRef){
    this.toastr.setRootViewContainerRef(vcr);
  } 

  SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
    
  swipe(action) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.open = true;
            this.sideBar.open = true;
        }
        if (action === this.SWIPE_ACTION.LEFT) {
          this.open = false;
          this.sideBar.open = false;
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