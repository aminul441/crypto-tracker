export default function CoinCard({ coin, onSelect }) {
  return (
    <div className="card" onClick={() => onSelect(coin)}>
      <img src={coin.image} alt={coin.name} />
      <h3>{coin.name}</h3>
      <p>${coin.current_price}</p>
      <span
        style={{
          color: coin.price_change_percentage_24h > 0 ? "green" : "red",
        }}
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </span>
    </div>
  );
}
