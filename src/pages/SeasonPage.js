import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { SeasonActions } from "../redux/actions";
import "../styles/styles.scss";
import Chapters from "../components/Chapters";

function SeasonPage(props) {
	const dispatch = useDispatch();

	const showSeason = props.showSeason;

	const season1 = useSelector((state) => state.Season.season1);
	const season2 = useSelector((state) => state.Season.season2);

	useEffect(() => {
		if (showSeason === "season1") {
			dispatch(SeasonActions.retrieveSeason1());
		} else if (showSeason === "season2") {
			dispatch(SeasonActions.retrieveSeason2());
		}
	}, [dispatch, showSeason]);

	const showChapterSeason1 = (chapter) => {
		const chapterIndex = season1.findIndex(
			(value) => value.key === chapter.key
		);
		if (chapterIndex === -1) {
			return;
		} else {
			season1[chapterIndex].showFull = !season1[chapterIndex].showFull;
		}
		dispatch(SeasonActions.getSeason1());
		dispatch(SeasonActions.setSeason1(season1));
	};

	const showChapterSeason2 = (chapter) => {
		const chapterIndex = season2.findIndex(
			(value) => value.key === chapter.key
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
			{showSeason === "season1" && (
				<>
					<h1>Season 1</h1>
					<Chapters chapters={season1} showChapter={showChapterSeason1} />
				</>
			)}
			{showSeason === "season2" && (
				<>
					<h1>Season 2</h1>
					<Chapters chapters={season2} showChapter={showChapterSeason2} />
				</>
			)}
		</section>
	);
}

export default SeasonPage;
