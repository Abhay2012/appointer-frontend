import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { ServicesService } from "../../providers/services.service";

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [ServicesService]
})
export class CategoryComponent implements OnInit {

  type: string;
  serviceProviders;
  stars = ["","","","",""]
  constructor(private ac: ActivatedRoute, private router : Router, private ss: ServicesService) {

  }

  ngOnInit() {
    this.ac.params.subscribe((params) => {
      this.type = params.type;
    })
    this.getUsers();
  }

  getUsers() {
    this.ss.getUsers(this.type).subscribe((res: any) => {
      this.serviceProviders = res.data;
      this.serviceProviders = this.serviceProviders.map((sp) => {
        if (sp.services[0].ratings.length > 0) {
          sp.rating = sp.services[0].ratings.reduce((sum, value) => {
            return sum + value;
          });
        }
        return sp;
      })
      console.log(this.serviceProviders);
    }, (err: any) => {

    })
  }

  toProfile(sp){
    this.router.navigate(['profile',sp._id]);
  }

}
