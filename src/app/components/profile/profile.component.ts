import { Component, OnInit } from "@angular/core";
import { ServicesService } from "../../providers/services.service";
import { ActivatedRoute, Router } from "@angular/router";
import { UserProfile } from "../../modals/lists";

declare let $ : any;
@Component({
    selector : 'profile',
    templateUrl : 'profile.component.html',
    styleUrls : [ 'profile.component.css' ],
    providers : [ ServicesService ]
})
export class ProfileComponent implements OnInit{
    
    local;
    user : UserProfile;
    services;
    enableChat : boolean = false;
    overallUserRating : number=0;
    noOfRatings : number=0;
    stars = ['','','','',''];
    reviews = [];

    constructor( private ss : ServicesService, private route : ActivatedRoute, private router:Router ){}
    ngOnInit(){
        this.route.params.subscribe((params)=>{
            this.getUserProfile(params);
            if(params.id != localStorage.getItem('id')) this.enableChat = true;
        })
        this.getServicesList();
    }

    getUserProfile(params){
        this.ss.getUserProfile(params.id).subscribe((data)=>{
            this.user = data.data;
            this.calculateRating();  
        })
    }

    calculateRating(){
        this.user.services.forEach((element)=>{
            element.overallRating = 0, element.noOfRatings = 0;
            for(let rating of element.ratings){
                element.overallRating += +rating;
                element.noOfRatings++;
            }
            this.overallUserRating += element.overallRating;
            this.noOfRatings += element.noOfRatings;
            console.log(this.user.services);
        })
        if(this.noOfRatings != 0) this.overallUserRating = Math.round(this.overallUserRating/this.noOfRatings);
    }

    getServicesList(){
        this.ss.getServiceList('services').subscribe((res:any)=>{
            this.services = res.data;
            console.log(this.services); 
        },(err:any)=>{

        })
    }

    openModal(id){
        console.log(id);
        $(id).modal('show');
    }

    addService(form){
        console.log(form.value);
        form.value.service_name = form.value.service.title;
        form.value.service = form.value.service.route;
        this.ss.addService(form.value).subscribe((res:any)=>{
            form.value.ratings = [];
            this.user.services.push(form.value);
        })
    }

    removeService(service,index){
        this.ss.removeService(service).subscribe((res:any)=>{
            this.user.services.splice(index,1);
        },(err:any)=>{

        })
    }

    getReviews(service){
        this.ss.getRatings(this.user._id,service).subscribe((res:any)=>{
            this.reviews = res.data;
            $('#showRatings').modal('show');
        },(err:any)=>{

        })
    }

    toChat(){
        let to = {
            user_id : this.user._id,
            user_name : this.user.name,
            profile_pic : this.user.profile_pic
        }
        localStorage.setItem('conversation_to', JSON.stringify(to));
        this.router.navigate(['messaging','new-conversation'])
    }

}