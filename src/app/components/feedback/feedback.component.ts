import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent{
	feedbackArr : any[] = [];
  onSubmit = function(object){
  	this.feedbackArr.push(object);
  	console.log(this.feedbackArr)
  }


}
