import { Injectable, OnInit } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService implements OnInit {

  constructor() { }
  customers:Customer[]=[];
  ngOnInit(): void {
     

    }
    add(customer_name:string){
      const customer=new Customer();
  customer.name=customer_name;
  this.customers.push(customer)
  
    }
    get(){
      return this.customers;
    }
    
  }
 
  

