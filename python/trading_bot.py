#!/usr/bin/env python
import sys
from ib_insync import IB, Stock

def get_realtime_price(symbol):
    ib = IB()
    # Connect to IB TWS or Gateway (adjust host/port/clientId as needed)
    ib.connect('127.0.0.1', 7497, clientId=1)
    contract = Stock(symbol, 'SMART', 'USD')
    # Request market data
    ib.reqMktData(contract, '', False, False)
    # Wait briefly for data to be received
    ib.sleep(2)
    ticker_data = ib.ticker(contract)
    price = ticker_data.last if ticker_data.last is not None else 0.0
    ib.disconnect()
    return price

if __name__ == '__main__':
    if len(sys.argv) < 2:
        print("Ticker symbol required")
        sys.exit(1)
    symbol = sys.argv[1]
    price = get_realtime_price(symbol)
    print(price)