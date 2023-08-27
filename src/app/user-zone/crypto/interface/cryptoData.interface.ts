export interface Ticker {
  ticker: {
    market: Market;
    time: string;
    highestBid: string;
    lowestAsk: string;
    rate: string;
    previousRate: string;
  };
}

export interface Market {
  code: string;
  first: First;
  second: Second;
  amountPrecision: number;
  pricePrecision: number;
  ratePrecision: number;
}

export interface First {
  currency: string;
  minOffer: string;
  scale: number;
}

export interface Second {
  currency: string;
  minOffer: string;
  scale: number;
}