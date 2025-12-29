import CoinCard from "./CoinCard";

export default function CoinList({ coins, onSelect }) {
  return (
    <div className="grid">
      {coins.map((coin) => (
        <CoinCard key={coin.id} coin={coin} onSelect={onSelect} />
      ))}
    </div>
  );
}
