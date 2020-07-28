import { Component, OnInit, Input, Output, ElementRef ,EventEmitter  } from '@angular/core';
 

@Component({
  selector: 'app-rows',
  templateUrl: './rows.component.html',
  styleUrls: ['./rows.component.css']
})
export class RowsComponent implements OnInit {

  constructor() { }


  
  @Input('id') id:string ;
  @Input('title') title:string ;
  @Input('status') status:any ;
  @Output() onChecked = new EventEmitter(); 
  

  ngOnInit(): void {
   
  }

  ngAfterViewInit(){
    this.actStatus();
  }


  actStatus(){
    var v= document.getElementById(this.id) ;
    console.log( this.status);
      
     if (this.status == 'true') 
      v.setAttribute('checked','checked') ; 

      v.setAttribute('name',this.status) ;
     
  }

  toggleStatus (){
    this.status = this.status == 'true'?'false' :'true' ;
    this.actStatus();
  }


  emitCheck(){
   
    //this.statusCheck = !this.statusCheck  ; 
    this.toggleStatus();
    this.onChecked.emit({id:this.id , status:this.status} );
  }

}
