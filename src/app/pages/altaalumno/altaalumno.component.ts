import { Component } from '@angular/core'
import { Title, Meta } from '@angular/platform-browser'

@Component({
  selector: 'app-altaalumno',
  templateUrl: 'altaalumno.component.html',
  styleUrls: ['altaalumno.component.css'],
})
export class Altaalumno {
  constructor(private title: Title, private meta: Meta) {
    this.title.setTitle('Altaalumno - SchoolApp')
    this.meta.addTags([
      {
        property: 'og:title',
        content: 'Altaalumno - SchoolApp',
      },
    ])
  }
}
