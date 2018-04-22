import { Component, OnInit } from "@angular/core";
import * as io from "socket.io-client";
import { Urls } from "../../../configs/urls";
import { ActivatedRoute } from "@angular/router";
import { ChatMessage } from "../../../modals/lists";
import { ChatService } from "../../../providers/chat.service";
import { ToastService } from "../../../providers/toast.service";

@Component({
    selector: 'message-chat',
    templateUrl: 'chat.component.html',
    styleUrls: ['chat.component.css'],
    providers: [ChatService,ToastService]
})
export class ChatComponent implements OnInit {

    private socket;
    conversation_id: string;
    message: string = '';
    messages: ChatMessage[] = [];
    local;
    pgNo : number = 1;

    constructor(private urls: Urls, private ar: ActivatedRoute, private cs: ChatService,private toast : ToastService) {

    }

    ngOnInit() {
        this.local = localStorage;
        this.ar.params.subscribe((param) => {
            this.conversation_id = param.id;
        })
        
        this.getMessages();
    }

    getMessages(){
        if (localStorage.getItem('id') && localStorage.getItem('id') != undefined) {
            if(this.conversation_id != 'new-conversation'){
            this.cs.getMessages(this.conversation_id, this.pgNo).subscribe((res: any) => {
                this.messages = res.data.concat(this.messages);
                setTimeout(() => {
                    var objDiv = document.getElementById("chat-box");
                    objDiv.scrollTop = objDiv.scrollHeight;
                }, 0)
            })}
            this.connectSocket();
        }
    }

    connectSocket() {
        this.socket = io.connect(this.urls.base_url);
        let data;
        if (this.conversation_id == 'new-conversation') {
            data = [
                JSON.parse(this.local['conversation_to']), 
                { user_id: this.local.id, user_name: this.local.name, user_pic: this.local.profile_pic ? this.local.profile_pic : '' }]
        } else {
            data = {
                conversation_id: this.conversation_id,
                to: JSON.parse(this.local['conversation_to']).user_id,
                from: this.local.id
            }
        }
        this.initiatChat(data);
    }

    initiatChat(data) {
        this.socket.emit('chat initiate', data);
        this.socket.on('connection message', (message) => {
            if(typeof message == "string") this.toast.customToast(message);
            if(typeof message != 'string'){
                this.conversation_id = message.conversation_id;
                this.getMessages();
            }  
        })
        this.socket.on('new message', (message) => {
            this.messages.push(message);
            setTimeout(() => {
                var objDiv = document.getElementById("chat-box");
                objDiv.scrollTop = objDiv.scrollHeight;
            }, 0)
        })
    }

    sendMessage() {
        if (this.message.trim() == '') return;
        let message: ChatMessage = {
            message: this.message,
            timestamp: (new Date()).getTime(),
            from: localStorage.getItem('id')
        }
        this.messages.push(message);
        this.socket.emit('send message', message);
        this.message = '';
        setTimeout(() => {
            var objDiv = document.getElementById("chat-box");
            objDiv.scrollTop = objDiv.scrollHeight;
        }, 0)
    }
}