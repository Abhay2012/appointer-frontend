import { Component } from "@angular/core";
import { LoginSignUpService } from "../../providers/login.service";

@Component({
    selector : 'profile',
    templateUrl : 'profile.component.html',
    styleUrls : [ 'profile.component.css' ],
    providers : [ LoginSignUpService ]
})
export class ProfileComponent{
    local;
    services = [
        {
            title : "Web Application Development",
            description : "Web Application Development using MEAN Stack"
        },
        {
            title : "Mobile Application Development",
            description : "Mobile Application Development using MEAN Stack"
        },
        {
            title : "Example Title",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ullam, ipsum voluptatibus beatae facilis ea reiciendis harum hic tenetur perferendis quas, ab et? Assumenda ipsum dolorem nisi repellendus eligendi quam!"
        },
        {
            title : "Mobile Application Development",
            description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, ullam, ipsum voluptatibus beatae facilis ea reiciendis harum hic tenetur perferendis quas, ab et? Assumenda ipsum dolorem nisi repellendus eligendi quam!"
        }
    ]

    constructor(){
        this.local = localStorage;
    }
}