import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-template',
  imports: [
    RouterModule,
    CommonModule
  ],
  templateUrl: './home-template.component.html',
  styleUrl: './home-template.component.css',
})
export class HomeTemplateComponent {
  totalSpikes = 16;
  radius = 120;

  get rays(): number[] {
    return Array.from({ length: this.totalSpikes }, (_, i) => i);
  }

  getAngle(i: number): number {
    return (360 / this.totalSpikes) * i;
  }
}
