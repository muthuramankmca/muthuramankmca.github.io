import { Component,OnInit } from '@angular/core';


import { CustomerService } from '../_services/customer.service';

@Component({
  selector: 'app-pdf',
  templateUrl: './pdf.component.html',
  styleUrls: ['./pdf.component.css']
})

export class PdfComponent implements OnInit {
  
constructor(private customerService:CustomerService){}


ngOnInit(): void {
}

addCustomer(customer_name:string){
  this.customerService.add(customer_name)
  


     
  
}


}