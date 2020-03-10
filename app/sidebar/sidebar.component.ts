import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [` `]
})
export class SidebarComponent implements OnInit {

  @Output() private numberGenerated = new EventEmitter<number>();
  @Output() private test = new EventEmitter<any>();

  num = 3;

  // public generateNumber() {
  //   const randomNumber = Math.random();
  //   this.numberGenerated.emit(randomNumber);
  // }

generateNumber1(e){
  this.test.emit({name:e,value:this.num})
}

constructor(){}
ngOnInit(){
      
}

}
