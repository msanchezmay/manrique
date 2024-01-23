import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MgenericaConfirmacionComponent } from './mgenerica-confirmacion/mgenerica-confirmacion.component';
import { MensajeComponent } from './mensaje/mensaje.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    MgenericaConfirmacionComponent,
    MensajeComponent,
    HeaderComponent,
    MenuComponent,
    DashboardComponent
  ],
  providers : [MaterialModule, ComunModule],
  exports : [ ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
})
export class ComunModule { }
