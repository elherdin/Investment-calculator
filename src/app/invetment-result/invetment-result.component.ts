import { Component } from '@angular/core';
import { InvestmentService } from '../../investment-results';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-invetment-result',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './invetment-result.component.html',
  styleUrl: './invetment-result.component.css'
})
export class InvetmentResultComponent {
  constructor(private investmentService: InvestmentService) { }

  get results() {
    return this.investmentService.resultData;
  }
}
