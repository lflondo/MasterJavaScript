import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-externo',
  standalone: false,
  templateUrl: './externo.component.html',
  styleUrl: './externo.component.css',
  providers: [PeticionesService]
})
export class ExternoComponent implements OnInit {

  public user: any;
  public userId: any;

  constructor(
    private _peticionesService: PeticionesService,
  ){
    this.userId = 1;
  }
  ngOnInit(){
    this.cargaUsuario();
  }

  cargaUsuario(){
    this.user = false;
    this._peticionesService.getUser(this.userId).subscribe({
      next: (result) =>{
        this.user = result.data;

      },
      error: (error) => {
        console.log(error);
      }}
     )
  }
}
