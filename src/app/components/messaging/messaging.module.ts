import { NgModule } from "@angular/core";
import { MessagingComponent } from './messaging.component';
import { RouterModule } from "@angular/router";

@NgModule({
    declarations : [ MessagingComponent ],
    imports : [ RouterModule.forChild([
        {
            path : '',
            component : MessagingComponent
        }
    ]) ]
})
export class MessagingModule{

}