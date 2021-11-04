import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { BitcoinService } from 'src/services/bitcoin.service';

@Component({
  selector: 'statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  marketPriceHistory: { x: number, y: number }[] = []
  // blockSizeHistory: any


  constructor(private bitCoinService: BitcoinService) { }
  lineChartData: ChartDataSets[];
  lineChartLabels: Label[];
  lineChartOptions: any = {
    responsive: true,
  };
  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,231,0,0.3)',
    },
  ];
  lineChartLegend = false;
  lineChartType = 'line';
  lineChartPlugins: any = [];

  async ngOnInit(): Promise<void> {
    await this.bitCoinService.getMarketPrice().subscribe(data => {
      this.marketPriceHistory = data as { x: number, y: number }[]

      this.lineChartData = [
        {
          data: this.marketPriceHistory.map(day => day.y),
          label: 'Market Price History'
        }
      ]
      this.lineChartLabels = this.marketPriceHistory.map(day => new Date(day.x * 1000).toLocaleString('en-GB'))

    })

  }

}
