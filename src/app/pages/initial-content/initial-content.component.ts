import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-initial-content',
  templateUrl: './initial-content.component.html',
  styleUrls: ['./initial-content.component.css']
})
export class InitialContentComponent {

  constructor(private router: Router) {}

  navigateToLast(): void {
    this.router.navigate(['/last']);
  }
}
