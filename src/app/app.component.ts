import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Truck {
  id: string;
  driver: string;
  status: 'Idle' | 'En route' | 'Loading' | 'Unloading' | 'Offline';
  location: string;
  eta?: string;
  load: string;
  lastUpdate: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
