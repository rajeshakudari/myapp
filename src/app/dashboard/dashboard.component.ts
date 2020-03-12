import { Component, OnInit } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
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
  url = 'http://localhost:3000/datatwo/';
  term: any;
  termone: any;


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



  constructor(private http: HttpClient, private fb: FormBuilder, private s: NewserviceService) {
    // this.setCities();
   }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/posts').subscribe( res =>{
      this.data = res;
      console.log(this.data);
    });

    this.http.get('http://localhost:3000/datatwo').subscribe( res =>{
      this.datas = res;
      console.log(this.datas);
    });

    this.newformdata = this.fb.group({
      name: ['', Validators.required],
      value: ['', Validators.required],
      id: ['', Validators.required],
      series: this.fb.array([
        this.fb.group({
          name: ['', Validators.required],
          value: ['', Validators.required]
        })
      ])
    })
  }

  public adddetails() {
    this.form_d = true;
  }

  public  newform(){
    let data = this.newformdata.value;
    // console.log(this.newformdata.value);
    if (this.newformdata.invalid) {
        console.log('err');
    } else {
      console.log('SUCCESS!! :-)\n\n' + JSON.stringify(this.newformdata.value));
     return this.http.post(this.url, data).subscribe(res => { console.log(res) });
    }

  }




}


