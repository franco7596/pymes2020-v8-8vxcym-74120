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
    this.fg = fb.group({
      IdGrupo: [0],
      NivelGrupo: [number,[Validators.required]],
      NombreGrupo: ["",[Validators.required]]
    })
  }

  cancelar(){
    this.lista = true;
  }

  guardar(){
    this.lista = true;
    const objeto = {...this.fg.value}
    this.servicio.post(objeto).subscribe((res: any)=>{
      window.alert('Carga exitosa');
    })
  }

}