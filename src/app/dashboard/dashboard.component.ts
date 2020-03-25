import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormArray } from '@angular/forms';
import { NewserviceService } from '../newservice.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  newformdata: FormGroup;
  form_d = false;
  data: any;
  datas: any;
  term: any;
  termone: any;
  pageSize: number = 5;

  colorScheme = {
    domain: ['#08DDC1', '#FFDC1B', '#FF5E3A']
  };

  public view: any[] = [500, 250];
  public showXAxis = true;
  public showYAxis = true;
  public gradient = false;
  public showLegend = true;
  public showXAxisLabel = true;
  public xAxisLabel: "Years";
  public showYAxisLabel = true;
  public yAxisLabel: "Salary";
  public graphDataChart: any[];
  public colorSchemetwo = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };



  constructor( private fb: FormBuilder, private s: NewserviceService) {

   }

  ngOnInit(): void {

    this.s.getdata().subscribe( res =>{
      this.datas = res;
      console.log(this.datas);
    });

    this.newformdata = this.fb.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      id: ['', Validators.required],
      series: this.fb.array([this.series])
    })
  }

  get series(): FormGroup {
    return this.fb.group({
      name: "",
      value: ""
    });
  }

  public adddetails() {
    this.form_d = true;
  }

  addseries() {
    (this.newformdata.get("series") as FormArray).push(this.series);
  }

  deleteseries(index) {
    (this.newformdata.get("series") as FormArray).removeAt(index);
  }

  public  newform(){
    let data = this.newformdata.value;
    if (this.newformdata.invalid) {
        console.log('err');
    } else {
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.newformdata.value));
     this.s.postdata(data).subscribe(res => { console.log(res) });
    }
  }

  onPageSizeChanged(event) { 
    if (this.pageSize == 5  ) { 
     let newdata= this.datas.slice(0,5);
      console.log(newdata);
    }  else if ( this.pageSize == 10) {
      let newdata= this.datas.slice(0,10);
      console.log(newdata);
    }
    return this.datas;
  }

}


