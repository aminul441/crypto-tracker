import { useEffect, useState } from "react";
import "./App.css";

import SearchBar from "./components/SearchBar";
import CoinList from "./components/CoinList";

export default function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);
  const [light, setLight] = useState(false);

  const fetchCoins = () => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    )
      .then((res) => res.json())
      .then((data) => setCoins(data));
  };

  useEffect(() => {
    fetchCoins();
    const interval = setInterval(fetchCoins, 30000);
    return () => clearInterval(interval);
  }, []);

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={'app ${light ? "light": ""}'}>
      <div className="toggle">
        <button onClick={() => setLight(!light)}>
          {light? "Dark": "Light"}
        </button>
      </div>



      <h1>📈 Crypto Tracker</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <CoinList coins={filteredCoins} onSelect={setSelected} />

      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
          >
            <span className="close" onClick={() => setSelected(null)}>
              ✖
            </span>

            <img src={selected.image} alt={selected.name} />
            <h2>{selected.name}</h2>
            <p>Price: ${selected.current_price}</p>
            <p>Market Cap: ${selected.market_cap.toLocaleString()}</p>
            <p>24h High: ${selected.high_24h}</p>
            <p>24h Low: ${selected.low_24h}</p>
          </div>
        </div>
      )}
    </div>
  );
}
