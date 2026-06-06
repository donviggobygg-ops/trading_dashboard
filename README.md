# Trading Dashboard

A standalone trading journal and analysis dashboard with lightweight-charts and Chart.js.

## Setup

### Prerequisites
- Node.js 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts a local dev server at `http://localhost:3000` (or the next available port).

### Production Build

```bash
npm run build
npm run preview
```

## Usage

1. **Import trades**: Drag & drop or browse a CSV file containing trades and deposits
2. **View dashboard**: See equity curves, daily P&L, and performance analytics
3. **Chart symbols**: Enter a ticker symbol and load the price chart with trade entry/exit markers
4. **Daily journal**: Track mood, trades, and lessons learned
5. **Weekly plans**: Set targets and document weekly trading plans
6. **Deposit tracking**: Manage account deposits and withdrawals

## Features

- **CSV Import**: Drag/drop or file upload for trades and deposits
- **Risk Calculation**: Automatic computation from Entry, Stop Loss, and Volume
- **Chart.js Analytics**: Equity curves, daily P&L, instrument performance breakdown
- **Lightweight Charts**: Candlestick charts with trade entry/exit markers
- **Market Data**: Live quote fetching for open positions (Yahoo Finance)
- **Local Storage**: All data persists in browser local storage
- **Responsive Design**: Works on desktop and tablet

## Notes

- Risk % of equity is calculated as: `(|Entry - Stop Loss| × Shares) / Equity × 100`
- The dashboard ignores any broken `% risk on equity` column from imported CSVs
- Market data is fetched from Yahoo Finance API (300 requests/day limit)
