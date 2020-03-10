import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styles: [` `]
})
export class MainComponent implements OnInit {

  public randomNumber:any="Button";
  uservalue = 10 ;
  public child:number

  public onNumberGenerated(randomNumber) {
      console.log(randomNumber.name)
      console.log(randomNumber.value)
      this.randomNumber = randomNumber.name;
      this.child = randomNumber.value;
    }

    submit(){
    const  numberone =  parseInt('uservalue')  + parseInt('child') 
     if (this.randomNumber == 'inc') {
      this.uservalue = (this.uservalue*1) + (this.child*1);
      console.log(this.uservalue);
     }  else {
      this.uservalue = this.uservalue - this.child;
      console.log(this.uservalue);

     }
    }

    ngOnInit(){

    }
}
