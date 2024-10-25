import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OtpInputModule } from '@syncfusion/ej2-angular-inputs'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OtpInputModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-otp-input-gs';
}
