import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { ModeloGrupo } from '../../models/modelo-grupo';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos: ModeloGrupo[] = [];
  lista: boolean = true;
  fg: FormGroup;
  constructor(private servicio: GruposService, private fb: FormBuilder) {
   }

  ngOnInit() {
     this.servicio.get()
    .subscribe((res: ModeloGrupo[]) => {
      this.grupos = res;
    });
  }

  alta(){
    this.lista = false;
    this.fg = this.fb.group({
      IdGrupo: [0],
      NivelGrupo: [Number,[Validators.required]],
      NombreGrupo: ["",[Validators.required]]
    })
  }

  cancelar(){
    this.lista = true;
  }

  guardar(){
   // if(this.fg.valid){
    this.lista = true;
    const objeto = {...this.fg.value}
    console.log(objeto);
    this.servicio.post(objeto).subscribe((res: any)=>{
      window.alert('Carga exitosa');
    })
    //}
   // else{
   //   window.alert('Datos mal ingresados');
   // }
  }

}