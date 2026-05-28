import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserInputComponent } from './user-input/user-input.component';
import { InvetmentResultComponent } from './invetment-result/invetment-result.component';
import { InvestmentService } from '../investment-results';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserInputComponent, InvetmentResultComponent],
  templateUrl: './app.component.html',

})
export class AppComponent {
  // 🌟 1. Buat variabel penampung array hasil investasi (awalnya kosong)
  investmentResults?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];

  // 🌟 2. Suntikkan service-nya di constructor
  constructor(private investmentService: InvestmentService) { }

  // 🌟 3. Fungsi penangkap event dari UserInputComponent
  onCalculateInvestmentResults(data: {
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }) {
    // Jalankan rumus di service, lalu tangkap return nilainya ke variabel kita
    this.investmentResults = this.investmentService.calculateInvestmentResults(data);
  }
}