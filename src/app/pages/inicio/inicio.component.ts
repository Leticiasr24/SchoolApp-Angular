import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-inicio',
  templateUrl: 'inicio.component.html',
  styleUrls: ['inicio.component.css'],
})
export class Inicio {
  raw76ud: string = ' '
  rawybhn: string = ' '
  rawxt7i: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'SchoolApp',
      },
    ])
  }
}
