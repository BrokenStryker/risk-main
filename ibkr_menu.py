from fastapi import FastAPI
from ib_insync import IB
from datetime import datetime

app = FastAPI()

def get_ibkr_status():
    ib = IB()
    try:
        # Attempt to connect to IBKR (assumes TWS or IB Gateway running on localhost port 7497)
        ib.connect('127.0.0.1', 7497, clientId=1)
        connected = True
    except Exception:
        return {"connected": False, "marketStatus": "Closed", "portfolioBalance": 0.0}
    
    # Placeholder market status based on current time
    now = datetime.now().time()
    market_status = "Open" if 9 <= now.hour < 16 else "Closed"
    
    # Retrieve portfolio balance from account summary
    account_summary = ib.accountSummary()
    portfolio_balance = 0.0
    for item in account_summary:
        if item.tag == "TotalCashValue":
            try:
                portfolio_balance = float(item.value)
            except Exception:
                portfolio_balance = 0.0
            break

    ib.disconnect()
    return {
        "connected": connected,
        "marketStatus": market_status,
        "portfolioBalance": portfolio_balance
    }

@app.get("/status")
async def status():
    return get_ibkr_status()