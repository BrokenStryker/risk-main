"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function TradingBotPage() {
  const [tickerInput, setTickerInput] = useState("");
  const [tickers, setTickers] = useState<{ symbol: string; price: number }[]>([]);

  function handleAddTicker() {
    if (!tickerInput) return;
    const mockPrice = parseFloat((Math.random() * 100).toFixed(2));
    setTickers((prev) => [
      ...prev,
      { symbol: tickerInput.toUpperCase(), price: mockPrice }
    ]);
    setTickerInput("");
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Trading Bot</h1>
      <div className="flex space-x-2">
        <Input
          placeholder="Enter a ticker"
          value={tickerInput}
          onChange={(e) => setTickerInput(e.target.value)}
        />
        <Button onClick={handleAddTicker}>Add Ticker</Button>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-semibold">Tickers</h2>
        <ul className="mt-2 space-y-2">
          {tickers.map((t, i) => (
            <li key={i} className="flex items-center space-x-4">
              <span>{t.symbol}</span>
              <span>Price: ${t.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}