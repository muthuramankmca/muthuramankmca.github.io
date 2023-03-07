import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
   @Input('size')
  size ="S";//s,m,l

  @Input('shade')
  shade="NA";//d,l,w,na
  @Input('animation')
  animation="F";//c,f,na

  @Input('name')
  name="";

}
