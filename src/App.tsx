import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { Converter } from "./components/Converter";

import { fetchExchangeRates } from "./action-creators/fetchExchange";
import { IExchangeRate } from "./types/types";
import "./styles/styles.scss";


function App() {
  const [еxchangeRates, setExchangeRates] = useState<IExchangeRate[]>([]);

  useEffect(() => {
    fetchExchangeRates(setExchangeRates);
  }, []);
 
 
  return (
    <div className="App">
      <div className="wrapper">
        <Header еxchangeRates={еxchangeRates}/>
        <Converter еxchangeRates={еxchangeRates}/>
      </div>
    </div>
  );
}

export default App;
