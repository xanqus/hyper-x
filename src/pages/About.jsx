import axios from "axios";
import React, { useEffect, useState } from "react";

const About = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await axios.get("https://api.coinpaprika.com/v1/tickers");
      console.log(data);
      setCoins(data.data);
    };
    getData();
  }, []);
  return (
    <div>
      <h2>About</h2>
      <ul>
        {coins.map((coin, index) => {
          return <li key={index}>{coin.id}</li>;
        })}
      </ul>
    </div>
  );
};

export default About;
