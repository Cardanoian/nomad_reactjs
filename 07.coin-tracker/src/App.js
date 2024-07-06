import { useState, useEffect } from "react";

import coin_url from "./coin_url";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState();

  const onChange = (event) => setMoney(event.target.value);
  const availableCoins = (price) => {
    if (money === undefined) {
      return 0;
    }
    return money / price;
  };

  const CoinList = ({ coins }) => {
    return (
      <select>
        {coins.map((coin) => (
          <option key={coin.id}>
            {coin.name} {coin.symbol}: {coin.quotes.USD.price} USD -{" "}
            {coin.quotes.USD.price / coins[0].quotes.USD.price} BTC{" - "}
            {availableCoins(coin.quotes.USD.price)} available
          </option>
        ))}
      </select>
    );
  };

  useEffect(() => {
    fetch(coin_url)
      .then((res) => res.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  return (
    <div className="App">
      <h1>The Coins! {loading ? null : `(${coins.length})`}</h1>
      <input
        value={money}
        onChange={onChange}
        type="number"
        placeholder="How much Dollars do you have?"
      />
      <br />
      <br />
      <br />
      {loading ? <strong>Loading...</strong> : <CoinList coins={coins} />}
    </div>
  );
}

export default App;
