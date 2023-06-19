import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-server-elements',
  templateUrl: './server-elements.component.html',
  styleUrls: ['./server-elements.component.css'],
})
export class ServerElementsComponent {
  // @Input() element!: { name: string; type: string; content: string };
  @Input('srvElement') element!: { name: string; type: string; content: string };
}
