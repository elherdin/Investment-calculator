import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invetment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invetment-result.component.html',
  styleUrl: './invetment-result.component.css'
})
export class InvetmentResultComponent {
  @Input() results: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[] | undefined;
}
