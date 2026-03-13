import { Component, inject,signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { ApiService } from './services/apiService';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ButtonModule, JsonPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('comsa_front');
  private apiService = inject(ApiService);
  respuesta: any;

  checkApi() {
    this.apiService.getStatus().subscribe({
      next: (data) => {
        this.respuesta = data;
        console.log(data);
      },
      error: (e) => console.error(e),
    });
  }
}
