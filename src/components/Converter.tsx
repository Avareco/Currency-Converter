import { FC, useState } from "react";
import { IExchangeRate } from "../types/types";
interface IHeader {
  еxchangeRates: IExchangeRate[];
}
export const Converter: FC<IHeader> = ({ еxchangeRates }) => {
  const [amount1, setAmount1] = useState<number>(0);
  const [amount2, setAmount2] = useState<number>(0);
  const [currency1, setCurrency1] = useState<string>("UAH");
  const [currency2, setCurrency2] = useState<string>("USD");

  function formatNumber(number: number): number {
    return Number(number.toFixed(4));
  }

  const findRate = (currency: string): number => {
    return Number(еxchangeRates.find((item) => currency === item.cc)?.rate);
  };

  const onChangeAmount1Handler = (amount1: number) => {
    setAmount2(
      formatNumber((amount1 * findRate(currency1)) / findRate(currency2))
    );
    setAmount1(amount1);
  };

  const currency1ChangeHandler = (currency1: string) => {
    setAmount2(
      formatNumber((amount1 * findRate(currency1)) / findRate(currency2))
    );
    setCurrency1(currency1);
  };

  const onChangeAmount2Handler = (amount2: number) => {
    setAmount1(
      formatNumber((amount2 * findRate(currency2)) / findRate(currency1))
    );
    setAmount2(amount2);
  };

  const currency2ChangeHandler = (currency2: string) => {
    setAmount1(
      formatNumber((amount2 * findRate(currency2)) / findRate(currency1))
    );
    setCurrency2(currency2);
  };

  return (
    <main className="main">
      <div className="converter">
        <div className="converter__currency">
          <input
            className="converter__input"
            onChange={(e) => onChangeAmount1Handler(Number(e.target.value))}
            type="number"
            name="amount1"
            value={amount1 === 0 ? "" : amount1}
          />
          <select
            onChange={(e) => currency1ChangeHandler(e.target.value)}
            name="currency1"
          >
            {еxchangeRates.map((item) =>
              item.cc === "UAH" ? (
                <option selected key={item.cc} value={item.cc}>
                  {item.cc}
                </option>
              ) : (
                <option key={item.cc} value={item.cc}>
                  {item.cc}
                </option>
              )
            )}
          </select>
        </div>
        <div className="converter__currency">
          <input
            className="converter__input"
            type="number"
            onChange={(e) => onChangeAmount2Handler(Number(e.target.value))}
            value={amount2 === 0 ? "" : amount2}
            name="amount1"
          />
          <select
            onChange={(e) => currency2ChangeHandler(e.target.value)}
            name="currency2"
          >
            {еxchangeRates.map((item) => (
              <option key={item.cc} value={item.cc}>
                {item.cc}
              </option>
            ))}
          </select>
        </div>
      </div>
    </main>
  );
};
