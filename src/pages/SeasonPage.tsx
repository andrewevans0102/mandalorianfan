import React, { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../index";
import { SeasonActions } from "../redux/actions";
import "../styles/styles.scss";
import Chapters from "../components/Chapters";
import { MandalorianChapter } from "../constants/Chapters";

function SeasonPage(props: { showSeason: string }) {
  const dispatch = useAppDispatch();

  const season1 = useAppSelector((state) => state.Season.season1);
  const season2 = useAppSelector((state) => state.Season.season2);

  useEffect(() => {
    if (props.showSeason === "season1") {
      dispatch(SeasonActions.retrieveSeason1());
    } else if (props.showSeason === "season2") {
      dispatch(SeasonActions.retrieveSeason2());
    }
  }, [dispatch, props.showSeason]);

  const showChapterSeason1 = (chapter: MandalorianChapter) => {
    const chapterIndex = season1.findIndex(
      (value: MandalorianChapter) => value.key === chapter.key
    );
    if (chapterIndex === -1) {
      return;
    } else {
      season1[chapterIndex].showFull = !season1[chapterIndex].showFull;
    }
    dispatch(SeasonActions.getSeason1());
    dispatch(SeasonActions.setSeason1(season1));
  };

  const showChapterSeason2 = (chapter: MandalorianChapter) => {
    const chapterIndex = season2.findIndex(
      (value: MandalorianChapter) => value.key === chapter.key
    );
    if (chapterIndex === -1) {
      return;
    } else {
      season2[chapterIndex].showFull = !season2[chapterIndex].showFull;
    }
    dispatch(SeasonActions.getSeason2());
    dispatch(SeasonActions.setSeason2(season2));
  };

  return (
    <section className="season">
      {props.showSeason === "season1" && (
        <>
          <h1>Season 1</h1>
          <Chapters chapters={season1} showChapter={showChapterSeason1} />
        </>
      )}
      {props?.showSeason === "season2" && (
        <>
          <h1>Season 2</h1>
          <Chapters chapters={season2} showChapter={showChapterSeason2} />
        </>
      )}
    </section>
  );
}

export default SeasonPage;
