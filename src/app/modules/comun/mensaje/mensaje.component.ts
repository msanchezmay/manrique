import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IMensajes } from 'src/app/modelos/comun/base.model';

@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent {
  constructor(
    public dialogo: MatDialogRef<MensajeComponent>,
    @Inject(MAT_DIALOG_DATA) public mensaje: IMensajes) { }
  

    cerrarDialogo(): void {
      this.dialogo.close(false);
    }
    confirmado(): void {
      this.dialogo.close(true);
    }
}
