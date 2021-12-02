import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../index";
import { CharactersActions } from "../redux/actions";
import "../styles/styles.scss";
import DoubleColumn from "../components/DoubleColumn";

function CharactersPage() {
  const dispatch = useAppDispatch();

  const characters = useAppSelector((state) => state.Characters.characters);

  useEffect(() => {
    dispatch(CharactersActions.retrieveCharacters());
  }, [dispatch]);

  return (
    <section className="doubleColumn">
      <h1>Characters</h1>
      <DoubleColumn values={characters.characters} source={"characters"} />
    </section>
  );
}

export default CharactersPage;
