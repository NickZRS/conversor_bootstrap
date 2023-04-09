import { Component } from '@angular/core';

@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css']
})
export class ConversorComponent {

    metro: number = 0;
    resp: string = "";

    milimetro(){
       
      (<HTMLInputElement>document.getElementById("resp")).value = (this.metro*1000)+" Mílimetros"
    }

    centimetro(){
      
      (<HTMLInputElement>document.getElementById("resp")).value = (this.metro*100)+" Centímetros"
    }
    

    quilometro(){

      (<HTMLInputElement>document.getElementById("resp")).value = (this.metro/1000)+" Quilômetros"
    }
    


}
