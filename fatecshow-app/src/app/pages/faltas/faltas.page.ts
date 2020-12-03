import { Component, OnInit } from '@angular/core';
import { Disciplinas } from 'src/app/models/Disciplinas';
import { Notas } from 'src/app/models/Notas';
import { FatecService } from 'src/app/services/fatec.service';

@Component({
  selector: 'app-faltas',
  templateUrl: './faltas.page.html',
  styleUrls: ['./faltas.page.scss'],
})
export class FaltasPage implements OnInit {
  public disciplinas: Disciplinas;
  notas: Notas;

  constructor(
    private fatecService: FatecService
  ) { }

  ngOnInit() {
    this.fatecService.getDisciplinas().subscribe((res: Disciplinas) => {
      this.disciplinas = res;
      console.log(this.disciplinas);
    });
    this.fatecService.getNotas().subscribe((res: Notas) => {
      this.notas = res;
      console.log(this.notas);
    });
  }

}
