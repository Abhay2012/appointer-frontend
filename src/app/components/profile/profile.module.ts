import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ProfileComponent } from "./profile.component";
import { CommonModule } from "@angular/common";
import { HttpModule } from "@angular/http";
import { Urls } from "../../configs/urls";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
    imports : [ 
        FormsModule, 
        ReactiveFormsModule,
        CommonModule,
        HttpModule,
        RouterModule.forChild([
        {
            path : '',
            component : ProfileComponent
        }
    ])],
    providers : [ Urls ],
    declarations : [ ProfileComponent ] 
})
export class ProfileModule{
    constructor(){}
}