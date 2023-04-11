import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

    metro: number = 0;
    resp: number = 0;

    milimetro(){
       
      this.resp = (this.metro*1000)
    }

    centimetro(){
      
      this.resp = (this.metro*100)
    }
    

    quilometro(){

      this.resp = (this.metro/1000)
    }
    


}
