import { Component, OnInit } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html', 
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {
  buttonName  =  'My Button'
  i = 0
  constructor() { }

  spinnerMode : ProgressSpinnerMode = 'determinate';
  btnEnable = true;

  ngOnInit(): void {
  }
  save(){    
         console.log('Click');
        }
  inc(){    
     this.i++;
     this.buttonName = 'Ele foi clicado ' + this.i + ' vezes'
     console.log(this.buttonName)

    }
  disable(){
    this.btnEnable = false;
    this.spinnerMode = "indeterminate"
    setTimeout(
      ()=>{
        this.btnEnable = true;
        this.spinnerMode = "determinate"
      },300
    )
  }
  cbChange(){
    
  }
}
