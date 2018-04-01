import { NgModule } from "@angular/core";
import { SideBarComponent } from "./sidebar.component";
import { RouterModule } from "@angular/router";


@NgModule({
	imports : [ RouterModule],
    declarations : [ SideBarComponent ],
    exports : [ SideBarComponent ],
    
    })
export class SideBarModule{

}