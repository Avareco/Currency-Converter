import { FC } from "react";
import { IExchangeRate } from "../types/types";
interface IHeader {
  еxchangeRates: IExchangeRate[];
}
export const Header: FC<IHeader> = ({ еxchangeRates }) => {
  const findCurrency = (currency: string): IExchangeRate | undefined => {
    return еxchangeRates.find((item) => item.cc === currency);
  };
  return (
    <header className="header">
      <div className="header-currency">
        <div className="header-currency__name">{findCurrency("EUR")?.cc}:</div>
        <div>{findCurrency("EUR")?.rate}</div>
      </div>
      <div className="header-currency">
        <div className="header-currency__name">{findCurrency("USD")?.cc}:</div>
        <div>{findCurrency("USD")?.rate}</div>
      </div>
    </header>
  );
};
