import { Component, OnInit } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../_services/customer.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
     constructor(private customerService:CustomerService){}
     customers:Customer[]=[];
  
  ngOnInit():void{
    this.customers=this.customerService.get();
   
  }

 
}
