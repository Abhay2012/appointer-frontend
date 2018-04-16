import { NgModule } from "@angular/core";
import { MessagingComponent } from './messaging.component';
import { RouterModule } from "@angular/router";
import { ChatComponent } from "./chat/chat.component";
import { Urls } from "../../configs/urls";

@NgModule({
    declarations : [ MessagingComponent,ChatComponent ],
    imports : [ RouterModule.forChild([
        {
            path : '',
            component : MessagingComponent
        },
        {
            path : ':id',
            component : ChatComponent
        }
    ]) ],
    providers : [Urls]
})
export class MessagingModule{

}