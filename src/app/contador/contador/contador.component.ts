import { Component } from '@angular/core';

@Component({
    selector: 'app-contador',
    template: `
    <h1>{{ titulo }}</h1>
        <!-- <button (click)=" numero=numero+1; ">+1</button>
        <span>{{ numero }}</span>
        <button (click)=" numero=numero-1; ">-1</button> -->

        <h3>La base es:<strong> {{base}}</strong> </h3>

        <button (click)=" modificar_numero('+') ">+{{base}}</button>
        <span>{{ numero }}</span>
        <button (click)=" modificar_numero('-') ">-{{base}}</button>


        <!-- 
        <button (click)=" acumular(base) ">+1</button>
        <span>{{ numero }}</span>
        <button (click)=" acumular(-base) ">-1</button>

        <button (click)=" acumular(1) ">+1</button>
        <span>{{ numero }}</span>
        <button (click)=" acumular(-1) ">-1</button> -->
    `
  })

export class ContadorComponent {

    titulo: string = 'Contador App';
    numero: number = 10;
    // sumar (){
    //   this.numero++;
    // }
    // restar (){
    //   this.numero--;
    // }
  
    base: number=5;
    acumular( valor:number ){
      this.numero+=valor;
    }
  
    modificar_numero( operador:string ){
      if(operador=='+'){
        this.numero+=this.base;
      }
      else if (operador=='-'){
        this.numero-=this.base;
      }
    }

}