import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  hereos:string[]=['Spiderman','Ironman','Hulk','Thor','Capitan America'];
  hereoBorrado:string='';

  borrarHereo(){
    //console.log('borrando');
    this.hereoBorrado = this.hereos.shift() || '';
  }


}
