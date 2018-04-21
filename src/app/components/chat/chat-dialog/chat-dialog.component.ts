import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ChatService, Message} from '../chat.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/scan';

@Component({
  selector: 'chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  public now: Date = new Date();

	messages: Observable<Message[]>;
	formValue: string;

  constructor(public chat: ChatService, cd:ChangeDetectorRef) { 
    setInterval(() => { cd.detectChanges();  }, 1);
  }

  ngOnInit() {
  	this.messages = this.chat.conversation.asObservable()
  		.scan((acc, val) => acc.concat(val)); 

  	
  }

  sendMessage(){
  	this.chat.converse(this.formValue);
  	this.formValue = '';
    document.getElementById('a').scrollIntoView();
  }

  showBot(){
    console.log("button clicked");
    document.getElementById('bot').style.display = "block";
    document.getElementById('botbtn').style.display = "none";
  }

  hideBot(){
   document.getElementById('bot').style.display = "none"; 
   document.getElementById('botbtn').style.display = "block";
  }

}
