import { Component } from '@angular/core';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css']
})
export class LibraryComponent {
  public testBeforePrint() {
    console.log("testBeforePrint() successfully called");
  }
  public testAfterPrint() {
    console.log("testAfterPrint() successfully called");
  }
  public testPagesLoaded(count: number) {
    console.log("testPagesLoaded() successfully called. Total pages # : " + count);
  }

}
