import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../index";
import { QuotesActions } from "../redux/actions";

function QuotesPage() {
  const dispatch = useAppDispatch();

  const quotes = useAppSelector((state) => state.Quotes.quotes);

  useEffect(() => {
    dispatch(QuotesActions.retrieveQuotes());
  }, [dispatch]);

  return (
    <section className="quotes">
      <h1>Quotes</h1>
      <ul>
        {quotes !== null &&
          quotes.map((quotesItem: string) => (
            <li key={quotesItem}>
              <q>{quotesItem}</q>
            </li>
          ))}
      </ul>
    </section>
  );
}

export default QuotesPage;
