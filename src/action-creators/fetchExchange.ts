import axios from "axios";
import { Dispatch, SetStateAction } from "react";

import { IExchangeRate } from "../types/types";
const baseCurrency: IExchangeRate = {
  rs030: 1,
  txt: "Українська гривня",
  rate: 1,
  cc: "UAH",
  exchangedate: "0",
};
export async function fetchExchangeRates(
  setExchangeRates: Dispatch<SetStateAction<IExchangeRate[]>>
) {
  try {
    const response = await axios.get<IExchangeRate[]>(
      "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    );
    setExchangeRates([
      ...response.data.filter((item) => item.cc === "USD" || item.cc === "EUR"),
      baseCurrency,
    ]);
  } catch (error) {
    alert(error);
  }
}
