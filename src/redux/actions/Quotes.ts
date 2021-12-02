import { QuotesActionTypes } from "../actionTypes";
import quotes from "../../config/quotes.json";

export function getQuotes() {
  return { type: QuotesActionTypes.GET_QUOTES };
}

export function setQuotes(quotes: any) {
  return { type: QuotesActionTypes.SET_QUOTES, quotes };
}

export function quotesError() {
  return { type: QuotesActionTypes.GET_QUOTES };
}

export function retrieveQuotes() {
  return function (dispatch: any) {
    dispatch(getQuotes());
    return dispatch(setQuotes(quotes));
  };
}
