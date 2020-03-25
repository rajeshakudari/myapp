import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [` `]
})
export class MainComponent implements OnInit {

  public randomNumber:any="Button";
  uservalue = 0 ;
  uservalues: any ;
  public child:number

  public onNumberGenerated(randomNumber) {
      this.randomNumber = randomNumber.name;
      this.child = randomNumber.value;
    }

    submit(){
     if (this.randomNumber == 'inc') {
      this.uservalue = (this.uservalue*1) + (this.child*1);
     }  else if (this.randomNumber == 'dec') {
      this.uservalue = this.uservalue - this.child;

     }
    }

    ngOnInit(){

    }
}
