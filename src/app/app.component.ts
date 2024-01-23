import { Component, ElementRef, ViewEncapsulation, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild('appDrawer') appDrawer: ElementRef | undefined
  showFiller = false
  title = 'Manrique Sanchez May';
}

