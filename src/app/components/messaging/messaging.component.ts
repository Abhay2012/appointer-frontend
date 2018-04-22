import { Component, OnInit } from "@angular/core";
import { ChatService } from "../../providers/chat.service";
import { Router } from "@angular/router";

@Component({
    selector : 'messaging',
    templateUrl : 'messaging.component.html',
    providers : [ ChatService ],
    styleUrls : ['messaging.component.css']
})
export class MessagingComponent implements OnInit{

    conversations : any[] = []; 
    local;
    constructor(private cs : ChatService, private router : Router){
    }

    ngOnInit(){
        this.local = localStorage;
        this.getChats();
    }

    getChats(){
        if(localStorage.getItem('id') && localStorage.getItem('id')!=undefined){
            this.cs.getChats(localStorage.getItem('id')).subscribe((res:any)=>{
                this.conversations = res.conversations.map(convo => {
                    convo.users = convo.users.filter(user => user.user_id != this.local.id);
                    return convo;
                });
                this.conversations = this.conversations.filter(convo => "latest" in convo);
                console.log(this.conversations);
            })
        }
        
        
    }

    toChat(index){
        localStorage.setItem('conversation_to',JSON.stringify(this.conversations[index].users[0]));
        this.router.navigate(['messaging',this.conversations[index]._id]);
    }


}