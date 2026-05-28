import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvetmentResultComponent } from './invetment-result/invetment-result.component';
import { InvestmentService } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvetmentResultComponent],
  providers: [InvestmentService],
  templateUrl: './app.component.html',
})
export class AppComponent { }
