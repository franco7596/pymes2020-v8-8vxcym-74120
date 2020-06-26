import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/grupos.service';
import { ModeloGrupo } from '../../models/modelo-grupo';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {
  grupos: ModeloGrupo[] = [];
  constructor(private servicio: GruposService) { }

  ngOnInit() {
     this.servicio.get()
    .subscribe((res: ModeloGrupo[]) => {
      this.grupos = res;
    });
  }

}