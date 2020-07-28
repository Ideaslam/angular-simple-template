import { Component, OnInit } from '@angular/core';
import {City} from '../../models/city' ; 
import { FormGroup, FormControl   } from '@angular/forms';
import { CityService } from '../../services/city/city.service';
import { ResponseState } from 'src/app/models/base-model';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {

  constructor( private cityService:CityService) { }

  ngOnInit(): void {
    this.initForm();
    this.Get();
  }
 

rows :any[]= [
  {id:1 ,name :"islam" ,status:false },
  {id:2 ,name :"faiez" ,status:true},
  {id:3 ,name :"mohammed" ,status:false}
] ; 


values :any [] =[];

 city :City; 
 cities:City[] ;
 cityForm:FormGroup; 
 showForm:boolean=false;

   initForm(city?:any){
     city = city|| new City();

    this.cityForm = new FormGroup({
      'Id' : new FormControl(city.Id) , 
      'Name': new FormControl(city.Name ),
    })

    
   }


   GetcheckedStatus(data){
     console.log(data); 
     var v =  document.getElementById(data.id) ;
    console.log(v.getAttribute('id'));

   }


   GetAllchecks(){
    this.values=[]; 

   for (let i=0 ;i < this.rows.length ; i++) {
        var v =  document.getElementById('ch-'+this.rows[i].id) ;
        var id = this.rows[i].id ;
        var value =v.getAttribute('name') ; 

        this.values.push({id:id ,value:value});

   }
      console.log(this.values);
  }

   Edit(id){
    this.showForm=true;
    this.GetOne(id) ;
   }
 

   Get(){
    this.cityService.Get({}).subscribe( 
       data => this.cities=data.Result,
       error => console.log('oops', error))
   }


   GetOne(id :number){
    this.cityService.GetOne(id).subscribe(res=>{
    
      this.city  =res.Result;
      console.log(this.city);
      this.cityForm.patchValue(this.city);
    })
   }

    

   Delete(id:number){
    debugger;
    this.cityService.Delete(id).subscribe(res=>{
      this.Get();
    })
   }


   Create(){
    
    let city = <City> this.cityForm.value;
    debugger;
    delete city.Id;
    this.cityService.Create(city).subscribe(res=>{
      this.showForm = false;
      this.Get();
    })
   }

   
   Update(){
    
    let city = <City> this.cityForm.value;
    debugger;
   
    this.cityService.Update(city).subscribe(res=>{
      this.showForm = false;
      this.Get();
    })
   }

   Submit(){   
    
    let city = <City> this.cityForm.value;
    debugger;
    if(city.Id ==null){
      this.Create();
    }else{
      this.Update();
    }
    
   }


 
}
