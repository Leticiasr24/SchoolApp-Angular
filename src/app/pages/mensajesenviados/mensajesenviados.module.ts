import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Mensajesenviados } from './mensajesenviados.component'

const routes = [
  {
    path: '',
    component: Mensajesenviados,
  },
]

@NgModule({
  declarations: [Mensajesenviados],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Mensajesenviados],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MensajesenviadosModule {}
