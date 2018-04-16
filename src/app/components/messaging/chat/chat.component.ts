import { Component, OnInit } from "@angular/core";
import * as io from "socket.io-client";
import { Urls } from "../../../configs/urls";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector : 'message-chat',
    templateUrl : 'chat.component.html'
})
export class ChatComponent implements OnInit{
    
    private socket;
    to : string;

    constructor(private urls : Urls, private ar : ActivatedRoute){

    }

    ngOnInit(){
        this.ar.params.subscribe((param)=>{
            this.to = param.id;
        })
        if(localStorage.getItem('id') && localStorage.getItem('id') != undefined){
            this.socket = io.connect(this.urls.base_url);
            this.socket.emit('chat initiate', { to : this.to, from : localStorage.getItem('id')});
            this.socket.on('new message',(message)=>{
                console.log("dsfc");
                console.log(message);
            })
        }
    }

    message(){        
        this.socket.emit('send message','chuedf dcuhcd dfuhvr')
    }
}