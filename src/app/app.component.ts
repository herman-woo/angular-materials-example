import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ExpansionPanel2Component } from './expansion-panel-2/expansion-panel-2.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ExpansionPanel2Component,SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'materials-project-2';
}
