import { Injectable } from "@angular/core";
import { CustomHttpService } from "./customHttp.service";
import { Urls } from "../configs/urls";
import 'rxjs/add/operator/map';

@Injectable()
export class ServicesService{

    constructor( private urls : Urls, private http : CustomHttpService){

    }

    getCategories(){
        return this.http.get(`/getData/services`)
    }

    getUsers(type){
        return this.http.get(`/getUsers/${type}`)
    }

    getServiceList(type){
        return this.http.get(`/getData/${type}`)
    }

    addService(data){
        return this.http.put('/addService',data)
    }

    getUserProfile(id){
        return this.http.get(`/userProfile/${id}`)
    }

    removeService(service){
        return this.http.delete(`/removeService/${service}`);
    }

    getRatings(user,service){
        return this.http.get(`/getRatings/${user}/${service}`);
    }
}