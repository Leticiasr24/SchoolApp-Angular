import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Altaalumno } from './altaalumno.component'

const routes = [
  {
    path: '',
    component: Altaalumno,
  },
]

@NgModule({
  declarations: [Altaalumno],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Altaalumno],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AltaalumnoModule {}
