import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from '@angular/common'

import { ComponentsModule } from '../components/components.module'
import { Plantillahorario } from './plantillahorario.component'

const routes = [
  {
    path: '',
    component: Plantillahorario,
  },
]

@NgModule({
  declarations: [Plantillahorario],
  imports: [CommonModule, ComponentsModule, RouterModule.forChild(routes)],
  exports: [Plantillahorario],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PlantillahorarioModule {}
