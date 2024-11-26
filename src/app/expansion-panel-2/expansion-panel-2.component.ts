import { Component } from '@angular/core';
import { ChangeDetectionStrategy, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-expansion-panel-2',
  standalone: true,
  imports: [CommonModule,MatExpansionModule],
  templateUrl: './expansion-panel-2.component.html',
  styleUrl: './expansion-panel-2.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class ExpansionPanel2Component {

  repeatable = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]

  readonly panelOpenState = signal(false);
}


