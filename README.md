# Project FileStructure

```

StockWatcher/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx
│   │   │   ├── Input.jsx
│   │   │   ├── Card.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── ErrorMessage.jsx
│   │   │
│   │   ├── layout/
│   │   │   ├── Header.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── stock/
│   │   │   ├── StockCard.jsx
│   │   │   ├── StockChart.jsx
│   │   │   ├── StockDetails.jsx
│   │   │   ├── StockList.jsx
│   │   │   └── StockSearch.jsx
│   │   │
│   │   └── watchlist/
│   │       ├── WatchlistItem.jsx
│   │       ├── WatchlistPanel.jsx
│   │       └── AddToWatchlist.jsx
│   │
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── StockDetail.jsx
│   │   ├── Watchlist.jsx
│   │   └── NotFound.jsx
│   │
│   ├── services/
│   │   ├── api/
│   │   │   ├── twelveData.js         // API calls to Twelve Data
│   │   │   └── axiosConfig.js        // Axios instance configuration
│   │   │
│   │   └── storage/
│   │       └── localStorage.js       // Watchlist persistence
│   │
│   ├── hooks/
│   │   ├── useStockData.js           // Fetch stock data
│   │   ├── useWatchlist.js           // Manage watchlist
│   │   ├── useStockSearch.js         // Search functionality
│   │   └── useRealTimePrice.js       // Real-time price updates
│   │
│   ├── context/
│   │   ├── WatchlistContext.jsx      // Global watchlist state
│   │   └── ThemeContext.jsx          // Dark/Light mode
│   │
│   ├── utils/
│   │   ├── formatters.js             // Price, date, number formatting
│   │   ├── constants.js              // API keys, endpoints, app constants
│   │   ├── validators.js             // Input validation
│   │   └── helpers.js                // General helper functions
│   │
│   ├── styles/
│   │   └── index.css                 // Tailwind directives
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
│   └── favicon.ico
│
├── .env                               // API keys (add to .gitignore!)
├── .env.example                       // Template for .env
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md

```