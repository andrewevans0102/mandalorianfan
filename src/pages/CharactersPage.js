import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { CharactersActions } from "../redux/actions";
import "../styles/styles.scss";
import DoubleColumn from "../components/DoubleColumn";

function CharactersPage(props) {
	const dispatch = useDispatch();

	const characters = useSelector((state) => state.Characters.characters);

	useEffect(() => {
		dispatch(CharactersActions.retrieveCharacters());
	}, [dispatch, characters]);

	return (
		<section className="doubleColumn">
			<h1>Characters</h1>
			<DoubleColumn values={characters} source={"characters"} />
		</section>
	);
}

export default CharactersPage;
