import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent {
termino : string = '';
hayError: boolean = false;
paises  : Country[]=[];

constructor ( private paisService : PaisService) {}

buscar( termino:string){

  this.hayError = false;
  this.termino=termino;
  
    this.paisService.buscarPais(termino)
    .subscribe( paises => {
      
      this.paises = paises;
      console.log(this.paises);
    }, (err)=>{
      console.log('Error');
      this.hayError = true;
      this.paises = []
    })

    // this.paisService.buscarPais(this.termino).subscribe({
    //   next: (paises) => {
    //     console.log(paises);this.hayError=false
    //   },
    //   error: (err) => {
    //     this.hayError=true
    //   }
    // })
}

  sugerencias(termino:string){
    this.hayError=false;
    //ToDo Crear sugerencias
  }
}
