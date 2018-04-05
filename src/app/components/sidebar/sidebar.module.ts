import { NgModule } from "@angular/core";
import { SideBarComponent } from "./sidebar.component";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

@NgModule({
    imports : [RouterModule,CommonModule],
    declarations : [ SideBarComponent ],
    exports : [ SideBarComponent ],
    
    })
export class SideBarModule{

}