import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-prueba',
  templateUrl: 'prueba.component.html',
  styleUrls: ['prueba.component.css'],
})
export class Prueba {
  rawflig: string = ' '
  rawtpwa: string = ' '
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('prueba - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'prueba - SchoolApp',
      },
    ])
  }
}
