import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MarketPrice } from 'src/app/models/market-price.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BitcoinService {

  MARKET_PRICE_HISTORY_URL = 'https://api.blockchain.info/charts/market-price?timespan=14days&format=json&cors=true'
  USD_RATE_URL = 'https://blockchain.info/tobtc?currency=USD&value=1'
  AVG_BLOCK_SIZE_URL = 'https://api.blockchain.info/charts/avg-block-size?timespan=14days&format=json&cors=true'

  constructor(private http: HttpClient) { }

  getBitcoinRate() {
    return this.http.get(this.USD_RATE_URL)
  }

  getMarketPrice() {
    return this.http.get<MarketPrice>(this.MARKET_PRICE_HISTORY_URL)
      .pipe(
        map(data => data.values)
      )

  }

  getBlockSize() {
    return this.http.get(this.AVG_BLOCK_SIZE_URL)
  }

}