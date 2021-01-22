import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { QuotesActions } from "../redux/actions";

function QuotesPage(props) {
	const dispatch = useDispatch();

	const quotes = useSelector((state) => state.Quotes.quotes);

	useEffect(() => {
		dispatch(QuotesActions.retrieveQuotes());
	}, [dispatch, quotes]);

	return (
		<section className="quotes">
			<h1>Quotes</h1>
			<ul>
				{quotes !== null &&
					quotes.map((quotesItem) => (
						<li key={quotesItem}>
							<q>{quotesItem}</q>
						</li>
					))}
			</ul>
		</section>
	);
}

export default QuotesPage;
